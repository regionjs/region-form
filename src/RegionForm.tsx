import * as React from 'react';
import { Form } from 'antd';
import { omit, pick } from 'lodash';
import { createCombinedRegion } from 'region-core';
import { antdAdapter as adapter } from './adapter/antd';

const formItemPropsList = ['colon', 'extra', 'hasFeedback', 'help', 'label', 'labelCol', 'required', 'validateStatus', 'wrapperCol'];

type Key = string;

type Selector = (state: any) => any;

type Validate = (value: any) => any;

interface BindWithOptions {
  validate?: Validate;
}

interface GetValidateStatusParams {
  loading: any;
  error: any;
  value: any;
}

const getValidateStatus = ({ loading, error, value }: GetValidateStatusParams) => {
  if (value === null) {
    return null;
  }
  if (loading) {
    return 'validating';
  }
  if (error) {
    return 'error';
  }
  return 'success';
};

class RegionForm {
  defaultProps: any;
  initialValues: any;
  labels: any;
  region = createCombinedRegion();

  constructor(option: any = {}, ignoreWarning?: boolean) {
    if (!ignoreWarning) {
      console.warn('RegionForm is deprecated, use createAntdFormRegion instead.');
    }
    const { defaultProps = {}, initialValues = {}, labels = {} } = option;
    this.defaultProps = defaultProps;
    this.initialValues = initialValues;
    this.labels = labels;
  }

  handlerFactory = (key: Key, selector: Selector, validate?: Validate) => (value: any) => {
    const selectedValue = selector(value);
    this.region.set(key, selectedValue);
    if (validate) {
      this.region.load(key, validate, { params: selectedValue });
    }
  }

  bindWith = (key: Key, Component: any, options: BindWithOptions = {}) => {
    const { validate } = options;
    const { handlerFactory, defaultProps, initialValues, labels } = this;
    const { set, useProps } = this.region;
    const initialValue = initialValues[key];
    const label = labels[key];
    set(key, initialValue);
    const [valueName, handlerName, selector] = adapter(Component);
    const handler = handlerFactory(key, selector, validate || defaultProps.validate);

    const ComponentOut = (props: any) => {
      const { loading, error, [key]: value } = useProps(key);
      const validateStatus = getValidateStatus({ loading, error, value });
      const combinedProps = Object.assign({ label }, defaultProps, props);
      const formItemProps = pick(combinedProps, formItemPropsList);
      const passByArgs = omit(combinedProps, ['dispatch', 'validate', valueName, handlerName].concat(formItemPropsList));
      const bindObj = { [valueName]: value, [handlerName]: handler };
      return (
        <Form.Item
          validateStatus={validateStatus as any}
          help={loading ? 'validating...' : error}
          {...formItemProps}
        >
          <Component {...bindObj} {...passByArgs} />
        </Form.Item>
      );
    };

    ComponentOut.displayName = `bindWith(${key}, ${Component.displayName || Component.name})`;
    return ComponentOut;
  }
}

export default RegionForm;
