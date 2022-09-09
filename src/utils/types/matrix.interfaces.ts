export interface IMatrixParameters {
    columns: number;
    rows: number;
    cells: number;
}

export interface IMatrixCell {
    id: string;
    amount: number;
}

export type MatrixRow = IMatrixCell[];

export type MatrixData = MatrixRow[];
