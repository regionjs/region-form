import React from 'react';
import { Region } from 'region-core';
import { Input } from 'antd';
import { omit } from 'lodash';

class RegionForm extends Region {
  handleValueChange = key => (value) => {
    this.set(key, value);
  }

  handleEventValueChange = key => (e) => {
    this.set(key, e.target.value);
  }

  Input = ({ valueKey, ...args }) => {
    const { connectWith, handleEventValueChange } = this;
    const passByArgs = omit(args, ['value', 'onChange']);
    // TODO memorize with valueKey
    const Hoc = ({ [valueKey]: value }) => (<Input vaule={value} onChange={handleEventValueChange} {...passByArgs} />);
    return connectWith(valueKey, Hoc);
  }
}

export { RegionForm };
