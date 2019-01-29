# region-form

[![version](https://img.shields.io/npm/v/redux-loadings.svg?style=flat-square)](http://npm.im/redux-loadings)
[![npm downloads](https://img.shields.io/npm/dm/redux-loadings.svg?style=flat-square)](https://www.npmjs.com/package/redux-loadings)
[![codecov](https://codecov.io/gh/dancerphil/redux-loadings/branch/develop/graph/badge.svg)](https://codecov.io/gh/dancerphil/redux-loadings)
[![MIT License](https://img.shields.io/npm/l/redux-loadings.svg?style=flat-square)](http://opensource.org/licenses/MIT)

双向绑定的 ant-design 表单，自动的数据管理。极其简单的 API！

[English](https://github.com/regionjs/region-core/blob/master/docs/README.md) | 中文

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [region-core](https://github.com/regionjs/region-core) | [![version](https://img.shields.io/npm/v/region-core.svg?style=flat-square)](http://npm.im/region-core) | [![](https://img.shields.io/badge/API-blue.svg?style=flat-square)](https://github.com/regionjs/region-core/blob/master/docs/Document.md) | Region 的核心，提供 set, load & connect |
| [region-shortcut](https://github.com/regionjs/region-shortcut) | [![version](https://img.shields.io/npm/v/region-shortcut.svg?style=flat-square)](http://npm.im/region-shortcut) | - | region-core 的封装，提供全局的 Provider, set, load & connect |
| [region-form](https://github.com/regionjs/region-form) | [![version](https://img.shields.io/npm/v/region-form.svg?style=flat-square)](http://npm.im/region-form) | [![](https://img.shields.io/badge/API-blue.svg?style=flat-square)](https://github.com/regionjs/region-form/blob/master/README.md) | RegionForm，bindWith 可以绑定任何 ant-design 表单组件 |

## Get Started

```bash
npm i region-form
```

创建一个文件名为 `Provider.js`

```jsx harmony
import { getProvider } from 'region-form';

const Provider = getProvider();
// or
const Provider = getProvider({ store, reducers});

export default Provider;
```

参见 [getProvider](https://github.com/regionjs/region-core/blob/master/docs/PrivateAPI.md#getProvider)

然后绑定表单项

```jsx harmony
import { RegionFrom } from 'region-form';

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

参见 [Region](https://github.com/regionjs/region-core/blob/master/docs/Document.md#Region)

## 示例

[在线示例](https://dancerphil.github.io/redux-loadings/#BindForm)
