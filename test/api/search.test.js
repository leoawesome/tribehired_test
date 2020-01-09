const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');

const app = require('../../node_modules/@boxescms/server/app');

describe('GET /search?postId=3', () => {
  it('OK, get the search comment with postId = 3', async () => {
    try {
      const res = await request(app).get('/search?postId=3');
      const test = [
        {
          postId: 3,
          id: 11,
          name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
          email: 'Veronica_Goodwin@timmothy.net',
          body: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
        },
        {
          postId: 3,
          id: 12,
          name: 'modi ut eos dolores illum nam dolor',
          email: 'Oswald.Vandervort@leanne.org',
          body: 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit',
        },
        {
          postId: 3,
          id: 13,
          name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
          email: 'Kariane@jadyn.tv',
          body: 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et',
        },
        {
          postId: 3,
          id: 14,
          name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
          email: 'Nathan@solon.io',
          body: 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum',
        },
        {
          postId: 3,
          id: 15,
          name: 'debitis magnam hic odit aut ullam nostrum tenetur',
          email: 'Maynard.Hodkiewicz@roberta.com',
          body: 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia',
        },
      ];
      expect(res.data).to.deep.equal(test);
    } catch (err) {
      // console.log(err);
    }
  });
});
