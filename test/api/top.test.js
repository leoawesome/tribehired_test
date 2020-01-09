const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');

const app = require('../../node_modules/@boxescms/server/app');

describe('GET /top', () => {
  it('OK, get the top comment', async () => {
    try {
      const res = await request(app).get('/top');
      const test = {
        post_id: '1',
        total_number_of_comments: 5,
        post_title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        post_body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      };
      expect(res.data).to.equal(test);
    } catch (err) {
      // console.log(err);
    }
  });
});
