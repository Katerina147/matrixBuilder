import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { MatrixData } from 'utils/types';

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

interface ICellIncrement {
    type: MATRIX_ACTION_TYPES.INCREMENT_CELL;
    payload: string;
}

interface INearestSell {
    type: MATRIX_ACTION_TYPES.GET_NEAREST_CELLS;
    payload: { id: string; amount: number };
}

interface INearestSellClear {
    type: MATRIX_ACTION_TYPES.CLEAR_NEAREST_CELLS;
    payload: undefined;
}

export type ActionTypes =
    | ICreteMatrix
    | ISetMatrixColumns
    | ISetMatrixRows
    | ISetMatrixCells
    | ICellIncrement
    | INearestSell
    | INearestSellClear;
