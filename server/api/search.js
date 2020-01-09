const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const {
      postId, id, name, email, body,
    } = req.query;
    const commentsRes = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let result = commentsRes.data;

    result = postId ? result.filter((el) => el.postId === Number(postId)) : result;
    result = id ? result.filter((el) => el.id === Number(id)) : result;
    result = name ? result.filter((el) => el.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
      : result;
    result = email ? result.filter((el) => el.email.toLowerCase() === email.toLowerCase()) : result;
    result = body ? result.filter((el) => el.body.toLowerCase().indexOf(body.toLowerCase()) !== -1)
      : result;

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
