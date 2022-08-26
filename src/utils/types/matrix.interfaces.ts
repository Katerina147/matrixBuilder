export interface IMatrixParameters {
    rows: number;
    columns: number;
    cells: number;
}

export interface IMatrixCell {
    id: string;
    amount: number;
}

export type MatrixRow = IMatrixCell[];

export type MatrixData = MatrixRow[];
