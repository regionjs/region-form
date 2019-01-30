import React from 'react';
import { Form } from 'antd';
import { omit, pick } from 'lodash';

const formItemPropsList = ['colon', 'extra', 'hasFeedback', 'help', 'label', 'labelCol', 'required', 'validateStatus', 'wrapperCol'];

const getValidateStatus = ({ loading, error, value }) => {
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

const wrapRegionForm = (Region, adapter) => {
  class RegionForm extends Region {
    constructor(option = {}) {
      let combinedOption = option;
      if (typeof option === 'string') {
        combinedOption = { name: option };
      }
      super(Object.assign({ name: 'bindForm' }, combinedOption));
      const { defaultProps = {}, initialValues = {}, labels = {} } = combinedOption;
      this.defaultProps = defaultProps;
      this.initialValues = initialValues;
      this.labels = labels;
    }

  handlerFactory = (key, selector, validate) => (value) => {
    const selectedValue = selector(value);
    this.set(key, selectedValue);
    if (validate) {
      this.load(key, validate, { params: selectedValue });
    }
  }

  bindWith = (key, Component, { validate } = {}) => {
    const { set, connectWith, handlerFactory, defaultProps, initialValues, labels } = this;
    const initialValue = initialValues[key];
    const label = labels[key];
    set(key, initialValue);
    const [valueName, handlerName, selector] = adapter(Component);
    const handler = handlerFactory(key, selector, validate || defaultProps.validate);

    const Hoc = ({ loading, error, [key]: value, ...props }) => {
      const validateStatus = getValidateStatus({ loading, error, value });
      const combinedProps = Object.assign({ label }, defaultProps, props);
      const formItemProps = pick(combinedProps, formItemPropsList);
      const passByArgs = omit(combinedProps, ['dispatch', 'validate', valueName, handlerName].concat(formItemPropsList));
      const bindObj = { [valueName]: value, [handlerName]: handler };
      return (
        <Form.Item
          validateStatus={validateStatus}
          help={loading ? 'validating...' : error}
          {...formItemProps}
        >
          <Component {...bindObj} {...passByArgs} />
        </Form.Item>
      );
    };
    return connectWith(key, Hoc);
  }
  }
  return RegionForm;
};

export default wrapRegionForm;
