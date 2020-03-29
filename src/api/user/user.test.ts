import { handler } from './user';

describe('user', () => {
  it('should return world', () => {
    expect(handler()).toEqual({
      hello: 'world'
    });
  });
});
