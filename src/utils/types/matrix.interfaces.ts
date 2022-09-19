export interface IMatrixParameters {
    columns: number;
    rows: number;
    cells: number;
}

export interface IMatrixCell {
    id: string;
    amount: number;
    isNearest: boolean;
}

export type MatrixRow = IMatrixCell[];
