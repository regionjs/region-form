import { Input, Radio, Checkbox, Transfer } from 'antd';

const adapter = (Component) => {
  const selectEvent = e => e.target.value;
  const selectValue = value => value;
  switch (Component) {
    case Input:
    case Input.TextArea:
    case Input.Search:
    case Input.Password:
    case Radio.Group:
      return ['value', 'onChange', selectEvent];
    case Checkbox.Group:
      return ['checked', 'onChange', selectValue];
    case Transfer:
      return ['targetKeys', 'onChange', selectValue];
    // case AutoComplete:
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


export default adapter;
