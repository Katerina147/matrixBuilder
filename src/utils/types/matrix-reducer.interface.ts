import { IMatrixParameters, MatrixData } from './matrix.interfaces';

export interface IMatrixReducer {
    matrix: MatrixData;
    matrixParameters: IMatrixParameters;
}
