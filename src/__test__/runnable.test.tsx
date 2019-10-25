import * as React from 'react';
import * as reactTestRenderer from 'react-test-renderer';
import components from './components';

describe('runnable', () => {
  test('antd', () => {
    expect(() => components.map(Component => reactTestRenderer.create(<Component />))).not.toThrow();

    // id changes
    // const elements = components.map(Component => <Component key={Component.displayName} />);
    // expect(reactTestRenderer.create(elements as any).toJSON()).toMatchSnapshot();
  });
});
