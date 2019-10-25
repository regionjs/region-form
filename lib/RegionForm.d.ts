/// <reference types="react" />
declare type Selector = (state: any) => any;
declare type Validate = (value: any) => any;
interface BindWithOptions {
    validate?: Validate;
}
declare class RegionForm {
    defaultProps: any;
    initialValues: any;
    labels: any;
    region: import("region-core/lib/CombinedRegion/RegionReact").default;
    constructor(option?: any, ignoreWarning?: boolean);
    handlerFactory: (key: string, selector: Selector, validate?: Validate | undefined) => (value: any) => void;
    bindWith: (key: string, Component: any, options?: BindWithOptions) => {
        (props: any): JSX.Element;
        displayName: string;
    };
}
export default RegionForm;
