import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { MatrixRow } from 'utils/types';

interface ICreteMatrix {
    type: MATRIX_ACTION_TYPES.CREATE;
    payload: {
        matrix: MatrixRow[];
        columns: number;
        rows: number;
    };
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

interface IAddMatrixRow {
    type: MATRIX_ACTION_TYPES.ADD_MATRIX_ROW;
    payload: number;
}

interface IDeleteMatrixRow {
    type: MATRIX_ACTION_TYPES.DELETE_MATRIX_ROW;
    payload: number;
}

export type ActionTypes =
    | ICreteMatrix
    | ISetMatrixCells
    | ICellIncrement
    | INearestSell
    | INearestSellClear
    | IAddMatrixRow
    | IDeleteMatrixRow;
