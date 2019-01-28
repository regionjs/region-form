import React from 'react';
import renderer from 'react-test-renderer';
import { AutoComplete, Checkbox, Cascader, DatePicker, InputNumber, Input, Mention, Rate, Radio, Switch, Slider, Select, TreeSelect, Transfer, TimePicker } from 'antd';
import { getProvider, RegionForm } from '..';

describe('runnable', () => {
  const Provider = getProvider();
  const region = new RegionForm({
    enableLog: false,
    initialValues: { Slider: 0, Transfer: [] },
  });
  const { bindWith } = region;
  test('antd', () => {
    const components = [
      bindWith('AutoComplete', AutoComplete),
      bindWith('Checkbox.Group', Checkbox.Group),
      bindWith('Cascader', Cascader),
      bindWith('DatePicker', DatePicker),
      bindWith('DatePicker.MonthPicker', DatePicker.MonthPicker),
      bindWith('DatePicker.RangePicker', DatePicker.RangePicker),
      bindWith('DatePicker.WeekPicker', DatePicker.WeekPicker),
      bindWith('InputNumber', InputNumber),
      bindWith('Input', Input),
      bindWith('Input.TextArea', Input.TextArea),
      bindWith('Input.Search', Input.Search),
      bindWith('Input.Password', Input.Password),
      bindWith('Mention', Mention),
      bindWith('Rate', Rate),
      bindWith('Radio.Group', Radio.Group),
      bindWith('Switch', Switch),
      // bindWith('Slider', Slider),
      bindWith('Select', Select),
      bindWith('TreeSelect', TreeSelect),
      // bindWith('Transfer', Transfer),
      bindWith('TimePicker', TimePicker),
    ];
    expect(() => components.map(Component => renderer.create(<Provider><Component /></Provider>))).not.toThrow();
  });

  test('Slider', () => {
    const SliderX = bindWith('Slider', Slider);
    expect(() => renderer.create(<Provider><SliderX /></Provider>)).not.toThrow();
  });

  test('Transfer', () => {
    const TransferX = bindWith('Transfer', Transfer);
    expect(() => renderer.create(<Provider><TransferX /></Provider>)).not.toThrow();
  });
});
