interface IScale {
    x: number | string;
    y: number | string;
}
interface IMove {
    x: number | string;
    y: number | string;
    z: number | string;
}
export interface IParams {
    scale?: IScale;
    move?: IMove;
}
export declare const matrixTransform: (params?: IParams) => string;
export {};
