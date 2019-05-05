import { Region } from 'region-core';
import { RegionForm } from '..';

describe('exports', () => {
  test('exports', () => {
    expect(typeof RegionForm).toBe('function');
    expect(Object.prototype.isPrototypeOf.call(Region, RegionForm)).toBe(true);
  });

  test('bindWith', () => {
    const region = new RegionForm();
    expect(typeof region.bindWith).toBe('function');
  });
});
