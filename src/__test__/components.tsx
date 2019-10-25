import * as React from 'react';
import {
  AutoComplete, Checkbox, Cascader, DatePicker, InputNumber, Input, Mention, Rate, Radio,
  Switch, Slider, Select, TreeSelect, Transfer, TimePicker,
} from 'antd';
import { RegionForm } from '../index';

export const region = new RegionForm({
  initialValues: { Slider: 0, Transfer: [] },
});

const { bindWith } = region;

export const components = [
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
  bindWith('Slider', Slider),
  bindWith('Select', Select),
  bindWith('TreeSelect', TreeSelect),
  bindWith('Transfer', Transfer),
  bindWith('TimePicker', TimePicker),
];
