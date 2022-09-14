import { Dispatch } from 'redux';
import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { generateMatrix } from 'utils/helpers/matrix';
import { ActionTypes } from './types';

export const createMatrix =
    (columns: number, rows: number) =>
    (dispatch: Dispatch): ActionTypes => {
        const matrix = generateMatrix(columns, rows);
        return dispatch({
            type: MATRIX_ACTION_TYPES.CREATE,
            payload: matrix
        });
    };

export const setColumns = (columns: number): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_COLUMNS,
    payload: columns
});

export const setRows = (rows: number): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_ROWS,
    payload: rows
});

export const setCells = (cells: number): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.SET_MATRIX_CELLS,
    payload: cells
});

export const cellIncrement = (id: string): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.INCREMENT_CELL,
    payload: id
});

export const getNearestCell = (id: string, amount: number): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.GET_NEAREST_CELLS,
    payload: { id, amount }
});

export const clearNearestCell = (): ActionTypes => ({
    type: MATRIX_ACTION_TYPES.CLEAR_NEAREST_CELLS,
    payload: undefined
});
