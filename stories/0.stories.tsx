import * as React from 'react';
import 'antd/dist/antd.css';
import { region, components } from '../src/__test__/components';

export default {
  title: 'manually test',
};

const keys = [
  'AutoComplete',
  'Checkbox.Group',
  'Cascader',
  'DatePicker',
  'DatePicker.MonthPicker',
  'DatePicker.RangePicker',
  'DatePicker.WeekPicker',
  'InputNumber',
  'Input',
  'Input.TextArea',
  'Input.Search',
  'Input.Password',
  'Mention',
  'Rate',
  'Radio.Group',
  'Switch',
  'Slider',
  'Select',
  'TreeSelect',
  'Transfer',
  'TimePicker',
];

export const antd = () => {
  const results = region.region.useProps(keys);
  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        {components.map(Component => <Component key={Component.displayName} />)}
      </div>
      {JSON.stringify(results)}
    </React.Fragment>
  );
};
