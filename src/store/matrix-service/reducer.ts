import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { IMatrixCell, IMatrixReducer, MatrixRow } from 'utils/types';
import { findNearestCells, generateMatrixRow } from 'utils/helpers';
import { ActionTypes } from './types';

const initialState: IMatrixReducer = {
    matrix: [],
    nearestCells: [],
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
                matrixParameters: {
                    ...state.matrixParameters,
                    columns: payload.columns,
                    rows: payload.rows
                },
                matrix: payload.matrix
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
                nearestCells: [...nearestCells]
            };
        }

        case MATRIX_ACTION_TYPES.CLEAR_NEAREST_CELLS:
            return {
                ...state,
                nearestCells: []
            };

        case MATRIX_ACTION_TYPES.ADD_MATRIX_ROW: {
            const matrix: MatrixRow[] = [
                ...state.matrix,
                generateMatrixRow(payload)
            ];
            return {
                ...state,
                matrix
            };
        }

        case MATRIX_ACTION_TYPES.DELETE_MATRIX_ROW: {
            return {
                ...state,
                matrix: state.matrix.filter(
                    (_row: MatrixRow, index: number) => index !== payload
                )
            };
        }

        default:
            return state;
    }
};

export default matrixReducer;
