import RegionForm from './RegionForm';

const createAntdFormRegion = (options: any) => {
  return new RegionForm(options, true);
};

export { RegionForm, createAntdFormRegion };
