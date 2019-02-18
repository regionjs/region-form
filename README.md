# region-form

[![version](https://img.shields.io/npm/v/region-form.svg?style=flat-square)](http://npm.im/region-form)
[![npm downloads](https://img.shields.io/npm/dm/region-form.svg?style=flat-square)](https://www.npmjs.com/package/region-form)
[![codecov](https://codecov.io/gh/regionjs/region-form/branch/develop/graph/badge.svg)](https://codecov.io/gh/regionjs/region-form)
[![MIT License](https://img.shields.io/npm/l/region-form.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Bind with ant-design form item, automatic data control. Extremely simple API!

English | [中文](https://github.com/regionjs/region-form/blob/master/docs/README-zh_CN.md)

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [region-core](https://github.com/regionjs/region-core) | [![version](https://img.shields.io/npm/v/region-core.svg?style=flat-square)](http://npm.im/region-core) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-core/blob/master/docs/Document.md) | The core of Region: set, load & connect |
| [region-shortcut](https://github.com/regionjs/region-shortcut) | [![version](https://img.shields.io/npm/v/region-shortcut.svg?style=flat-square)](http://npm.im/region-shortcut) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-shortcut/blob/master/README.md) | Wrapped core with global Provider, set, load & connect |
| [region-form](https://github.com/regionjs/region-form) | [![version](https://img.shields.io/npm/v/region-form.svg?style=flat-square)](http://npm.im/region-form) | [![](https://img.shields.io/badge/API-markdown-blue.svg?style=flat-square)](https://github.com/regionjs/region-form/blob/master/README.md) | RegionForm extends Region: bindWith any ant-design form item |

## Get Started

```bash
npm i region-form
```

- Create a file named `Provider.js`

```jsx harmony
import { getProvider } from 'region-form';

const Provider = getProvider();
// or
const Provider = getProvider({ store, reducers});

export default Provider;
```

see [getProvider](https://github.com/regionjs/region-core/blob/master/docs/PrivateAPI.md#getProvider)

- Then bind your form item

```jsx harmony
import { RegionFrom } from 'region-form';
import { Card, Input, Switch, Radio, Checkbox } from 'antd';

const region = new RegionFrom({
  name: 'form',
  defaultProps: {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 20 },
    },
  },
  initialValues: {
    a: false,
    b: 'b',
    c: 'c',
    d: ['option1', 'option2']
  },
});

const validate = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('value is invalid');
  }
};

const SwitchA = region.bindWith('a', Switch, { validate });
const InputB = region.bindWith('b', Input, { validate });
const RadioGroupC = region.bindWith('c', Radio.Group, { validate });
const CheckBoxGroupD = region.bindWith('d', Checkbox.Group, { validate });

const Form = () => (
  <Card>
    <SwitchA label="LabelA" />
    <InputB label="LabelB" />
    <RadioGroupC label="LabelC" options={['Hangzhou', 'Shanghai', 'Beijing', 'Chengdu']} />
    <CheckBoxGroupD label="LabelD" options={['Apple', 'Pear', 'Orange']} />
  </Card>
);

const Result = ({ a, b, c, d }) => (
  <Card>
    {JSON.stringify({ a, b, c, d })}
  </Card>
);

const ConnectResult = region.connectWith(['a', 'b', 'c', 'd'], Result);
```

see also [Region](https://github.com/regionjs/region-core/blob/master/docs/Document.md#Region)

- If you are using region-core, or you are using own ui library with an unique adapter provided

```jsx harmony
import { Region } from 'region-core';
import wrapRegionForm from 'region-form/lib/wrapRegionForm';
import adapter from 'region-form/lib/adapter/antd';

const RegionForm = wrapRegionForm(Region, adapter);
```

## Example

[Online Example](https://regionjs.github.io/region-core/#BindForm)

## Contribute

Region is Extremely easy to extend, fire a issue if you have some great idea.

```javascript
import { Region } from 'region-core';

class MyRegion extends Region {
  constructor(...args) {
    super(...args);
    this.someFunc = this.someFunc.bind(this); // in case you are not using class field
  }

  someFunc() {}
}
```

As for pull request, make sure to add test for your code.
