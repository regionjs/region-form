import { getProvider, Region } from 'region-core';
import defaultAdapter from './adapter/antd';
import wrapRegionForm from './wrapRegionForm';

const RegionForm = wrapRegionForm(Region, defaultAdapter);

export { getProvider, RegionForm };
