import { IMatrixParameters, MatrixRow } from './matrix.interfaces';

export interface IMatrixReducer {
    matrix: MatrixRow[];
    matrixParameters: IMatrixParameters;
}
