import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { MatrixData } from 'utils/types/matrix.interfaces';

interface ICreteMatrix {
    type: MATRIX_ACTION_TYPES.CREATE;
    payload: MatrixData;
}

interface ISetMatrixColumns {
    type: MATRIX_ACTION_TYPES.SET_MATRIX_COLUMNS;
    payload: number;
}

interface ISetMatrixRows {
    type: MATRIX_ACTION_TYPES.SET_MATRIX_ROWS;
    payload: number;
}

interface ISetMatrixCells {
    type: MATRIX_ACTION_TYPES.SET_MATRIX_CELLS;
    payload: number;
}

export type ActionTypes =
    | ICreteMatrix
    | ISetMatrixColumns
    | ISetMatrixRows
    | ISetMatrixCells;