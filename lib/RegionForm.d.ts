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
    set: (key: string, result: any, option?: import("region-core/lib/types").LoadOption | undefined) => any;
    setBy: (key: string, option?: import("region-core/lib/types").LoadOption | undefined) => (result: any) => any;
    load: (key: string, asyncFunction: any, optionOrReducer?: import("region-core/lib/types").LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: import("region-core/lib/types").LoadOption | undefined) => Promise<any>;
    loadBy: (key: string, asyncFunction: any, optionOrReducer?: import("region-core/lib/types").LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: import("region-core/lib/types").LoadOption | undefined) => (params: any) => Promise<any>;
    getProps: (key: import("region-core/lib/types").Key) => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("region-core/lib/types").Props;
    getValue: (key: string) => any;
    getLoading: (key: string) => any;
    getError: (key: string) => any;
    getFetchTime: (key: string) => any;
    useProps: (key: import("region-core/lib/types").Key) => import("region-core/lib/types").Props;
    useValue: (key: import("region-core/lib/types").Key) => any;
    useLoading: (key: import("region-core/lib/types").Key) => any;
    useError: (key: import("region-core/lib/types").Key) => any;
    useFetchTime: (key: import("region-core/lib/types").Key) => any;
    constructor(option?: any, ignoreWarning?: boolean);
    handlerFactory: (key: string, selector: Selector, validate?: Validate | undefined) => (value: any) => void;
    bindWith: (key: string, Component: any, options?: BindWithOptions) => {
        (props: any): JSX.Element;
        displayName: string;
    };
}
export default RegionForm;
