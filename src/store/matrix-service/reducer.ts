import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { IMatrixCell, IMatrixReducer, MatrixRow } from 'utils/types';
import { findNearestCells } from 'utils/helpers';
import { ActionTypes } from './types';

const initialState: IMatrixReducer = {
    matrix: [],
    matrixParameters: {
        columns: 0,
        rows: 0,
        cells: 0
    }
};

const matrixReducer = (
    state = initialState,
    action: ActionTypes
): IMatrixReducer => {
    const { type, payload } = action;
    switch (type) {
        case MATRIX_ACTION_TYPES.CREATE:
            return {
                ...state,
                matrix: payload
            };

        case MATRIX_ACTION_TYPES.SET_MATRIX_COLUMNS:
            return {
                ...state,
                matrixParameters: {
                    ...state.matrixParameters,
                    columns: payload
                }
            };

        case MATRIX_ACTION_TYPES.SET_MATRIX_ROWS:
            return {
                ...state,
                matrixParameters: {
                    ...state.matrixParameters,
                    rows: payload
                }
            };

        case MATRIX_ACTION_TYPES.SET_MATRIX_CELLS:
            return {
                ...state,
                matrixParameters: {
                    ...state.matrixParameters,
                    cells: payload
                }
            };

        case MATRIX_ACTION_TYPES.INCREMENT_CELL:
            return {
                ...state,
                matrix: state.matrix.map((rowIncrement: MatrixRow) =>
                    rowIncrement.map((cellIncrement: IMatrixCell) =>
                        cellIncrement.id === payload
                            ? {
                                  ...cellIncrement,
                                  amount:
                                      cellIncrement.amount < 999
                                          ? cellIncrement.amount + 1
                                          : cellIncrement.amount
                              }
                            : cellIncrement
                    )
                )
            };

        case MATRIX_ACTION_TYPES.GET_NEAREST_CELLS: {
            const nearestCells = findNearestCells(
                state.matrix,
                payload.id,
                payload.amount,
                state.matrixParameters.cells
            );
            return {
                ...state,
                matrix: state.matrix.map((row: MatrixRow) =>
                    row.map((cell: IMatrixCell) => ({
                        ...cell,
                        isNearest: nearestCells.some(
                            (item: IMatrixCell) => item.id === cell.id
                        )
                    }))
                )
            };
        }

        case MATRIX_ACTION_TYPES.CLEAR_NEAREST_CELLS:
            return {
                ...state,
                matrix: state.matrix.map((row: MatrixRow) =>
                    row.map((cell: IMatrixCell) => ({
                        ...cell,
                        isNearest: false
                    }))
                )
            };
        default:
            return state;
    }
};

export default matrixReducer;
