require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('../seedData');


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

describe('chirp model', () => {
  it('gets a list of all animals', () => {
    return request(app)
      .get('/chirps')
      .then(res => {
        expect(res.body).toHaveLength(100);
      });
  });
});
