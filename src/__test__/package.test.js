import packageJson from '../../package';

describe('packageJson', () => {
  test('packageJson', () => {
    expect(packageJson.version === packageJson.dependencies['region-core'].slice(1)).toBe(true);
  });
});
