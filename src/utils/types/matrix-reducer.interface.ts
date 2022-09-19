import { IMatrixCell, IMatrixParameters, MatrixRow } from './matrix.interfaces';

export interface IMatrixReducer {
    matrix: MatrixRow[];
    nearestCells: IMatrixCell[];
    matrixParameters: IMatrixParameters;
}
