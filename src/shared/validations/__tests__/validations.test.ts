import { required } from '..';

describe('Validation functions', () => {
  it('>> required', () => {
    expect(required('')).toEqual('Required');
    expect(required('cats')).not.toBeDefined();
  });
});
