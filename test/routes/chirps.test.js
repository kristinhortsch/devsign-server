require('dotenv').config();
require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const seedData = require('../seedData');
const Chirp = require('../../lib/models/Chirp');

jest.mock('../../lib/services/auth.js');
jest.mock('../../lib/middleware/ensureAuth.js');

const createChirp = (user) => {
  return Chirp
    .create({
      text: 'hello there',
      user
    })
    .then(res => res.body);
};

describe('chirp model', () => {
  beforeEach(() => {
    return seedData();
  });

  afterEach(done => {
    mongoose.connection.dropDatabase(done);
    
  });

  afterAll(done => {
    mongoose.connection.close(done);
  });

  it('gets a list of all chirps', () => {
    return request(app)
      .get('/chirps')
      .then(res => {
        expect(res.body).toHaveLength(100);
      });
  });

  it('gets a list of all chirps from a user', () => {
    const users = ['1234', '1234', '1234', '1222', '0000'];
    return Promise.all(users.map(createChirp))
      .then(() => {
        return request(app)
          .get('/chirps/users/0000')
          .then (res => {
            expect(res.body).toHaveLength(1);
            expect(res.body).toEqual([{
              __v: 0,
              _id: expect.any(String),
              text: 'hello there',
              user: '0000'
            }]);
          });
      });
  });

  it('posts a chirp', () => {
    return request(app)
      .post('/chirps')
      .send({
        text: 'this is my chirp'
      })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          user: '1234',
          _id: expect.any(String),
          text: 'this is my chirp'
        });
      });
  });

  it('deletes a chirp', () => {
    return request(app)
      .post('/chirps')
      .send({
        text: 'the chirp that will be deleted'
      })
      .then(res => {
        return request(app)
          .delete(`/chirps/${res.body._id}`)
          .then(res => {
            expect(res.body).toEqual({
              __v: 0,
              user: '1234',
              _id: expect.any(String),
              text: 'the chirp that will be deleted'
            });
          });
      });
  });
});
