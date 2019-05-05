import { Region } from 'region-core';
import { antdAdapter } from './adapter/antd';
import wrapRegionForm from './wrapRegionForm';

export const RegionForm = wrapRegionForm(Region, antdAdapter);
