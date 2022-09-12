import { Dispatch } from 'redux';
import { generateMatrix } from 'utils/helpers/matrix';
import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';

export const createMatrix =
    (columns: number, rows: number) => (dispatch: Dispatch) => {
        const matrix = generateMatrix(columns, rows);
        dispatch({
            type: MATRIX_ACTION_TYPES.CREATE,
            payload: matrix
        });
    };

export const setColumns = (columns: number) => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_COLUMNS,
    payload: columns
});

export const setRows = (rows: number) => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_ROWS,
    payload: rows
});

export const setCells = (cells: number) => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_CELLS,
    payload: cells
});

export const cellIncrement = (id: string) => ({
    type: MATRIX_ACTION_TYPES.CELL_INCREMENT,
    payload: id
});
