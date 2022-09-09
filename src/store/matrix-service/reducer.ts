import { MATRIX_ACTION_TYPES } from 'utils/enums/matrix-action-types';
import { IMatrixReducer } from 'utils/types';
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

        default:
            return state;
    }
};

export default matrixReducer;
