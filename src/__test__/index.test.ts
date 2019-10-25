import { createAntdFormRegion, RegionForm } from '..';

describe('exports', () => {
  test('exports', () => {
    expect(typeof RegionForm).toBe('function');
    expect(typeof createAntdFormRegion).toBe('function');
  });

  test('bindWith', () => {
    const region = new RegionForm();
    expect(typeof region.bindWith).toBe('function');

    const region2 = createAntdFormRegion();
    expect(typeof region2.bindWith).toBe('function');
  });
});
