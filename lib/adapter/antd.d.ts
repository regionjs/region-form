declare type Selector = (state: any) => any;
declare type Adapter = (Component: any) => [string, string, Selector];
export declare const antdAdapter: Adapter;
export {};
