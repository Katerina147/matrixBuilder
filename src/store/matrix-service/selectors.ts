import { Store } from 'store';

export const getMartrixSelector = (store: Store) => store.matrix.matrix;

export const getColumnsSelector = (store: Store): number =>
    store.matrix.matrixParameters.columns;

export const getRowsSelector = (store: Store): number =>
    store.matrix.matrixParameters.rows;

export const getCellsSelector = (store: Store): number =>
    store.matrix.matrixParameters.cells;
