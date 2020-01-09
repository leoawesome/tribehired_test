/* eslint-disable no-param-reassign */
const router = require('express').Router();
const axios = require('axios');

const getTopPost = async (num) => {
  const commentsRes = await axios.get('https://jsonplaceholder.typicode.com/comments');
  const comments = commentsRes.data;

  const commentsCount = comments.reduce((acc, comment) => {
    acc[comment.postId] = acc[comment.postId] || 0;
    acc[comment.postId] += 1;
    return acc;
  }, {});

  let result = Object.keys(commentsCount).map((key) => ({
    post_id: key,
    total_number_of_comments: commentsCount[key],
  }));

  result = result.sort((a, b) => b.total_number_of_comments - a.total_number_of_comments)
    .slice(0, num);

  result = await Promise.all(result.map(async (el) => {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${el.post_id}`);
    el.post_title = post.data.title;
    el.post_body = post.data.body;

    return el;
  }));

  return result;
};

router.get('/', async (req, res) => {
  try {
    const result = await getTopPost(1);
    return res.json({
      data: result[0],
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
});

router.get('/:num', async (req, res) => {
  try {
    const result = await getTopPost(req.params.num || 1);
    return res.json({
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
});

module.exports = router;
