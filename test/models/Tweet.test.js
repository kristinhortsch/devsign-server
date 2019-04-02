const Chirp = require('../../lib/models/Chirp');

describe('Chirp model', () => {
  it('validates a good chirp model', () => {
    const chirp = new Chirp({
      chirp: 'hey yo',
      user: '1234'
    });
  
    expect(chirp.toJSON()).toEqual({
      chirp: 'hey yo',
      user: '1234',
      _id: expect.any(Object)
    });
  });
});
