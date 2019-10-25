import { RegionForm } from '..';

describe('exports', () => {
  test('exports', () => {
    expect(typeof RegionForm).toBe('function');
  });

  test('bindWith', () => {
    const region = new RegionForm();
    expect(typeof region.bindWith).toBe('function');
  });
});
