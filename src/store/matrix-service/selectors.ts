import { Store } from 'store';
import { IMatrixCell, MatrixRow } from 'utils/types/matrix.interfaces';

export const getMartrixSelector = (store: Store): MatrixRow[] =>
    store.matrix.matrix;

export const getColumnsSelector = (store: Store): number =>
    store.matrix.matrixParameters.columns;

export const getRowsSelector = (store: Store): number =>
    store.matrix.matrixParameters.rows;

export const getCellsSelector = (store: Store): number =>
    store.matrix.matrixParameters.cells;

export const getNearestCellsSelector = (store: Store): IMatrixCell[] =>
    store.matrix.nearestCells;
