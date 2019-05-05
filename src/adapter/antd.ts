import { Input, Radio, Transfer } from 'antd';

const selectEvent = (e: any) => e.target.value;
const selectValue = (value: any) => value;

export const antdAdapter = (Component: any) => {
  switch (Component) {
    case Input:
    case Input.TextArea:
    case Input.Search:
    case Input.Password:
    case Radio.Group:
      return ['value', 'onChange', selectEvent];
    case Transfer:
      return ['targetKeys', 'onChange', selectValue];
    // case AutoComplete:
    // case Checkbox.Group:
    // case Cascader:
    // case DatePicker:
    // case DatePicker.MonthPicker:
    // case DatePicker.RangePicker:
    // case DatePicker.WeekPicker:
    // case InputNumber:
    // case Mention:
    // case Rate:
    // case Switch:
    // case Slider:
    // case Select:
    // case TreeSelect:
    // case TimePicker:
    default: {
      return ['value', 'onChange', selectValue];
    }
  }
};
