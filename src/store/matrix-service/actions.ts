import { Dispatch } from 'redux';
import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { generateMatrix } from 'utils/helpers';

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