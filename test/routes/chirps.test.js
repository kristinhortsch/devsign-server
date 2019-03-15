require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('../seedData');

jest.mock('../../lib/services/auth.js');
jest.mock('../../lib/middleware/ensureAuth.js');

describe('chirp model', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
    return seedData();
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
});
