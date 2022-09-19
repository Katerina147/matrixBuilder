import { nanoid } from 'nanoid';
import { IMatrixCell, MatrixRow } from 'utils/types/matrix.interfaces';

export const generateMatrixCell = (): IMatrixCell => ({
    id: nanoid(),
    amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
    isNearest: false
});

export const generateMatrixRow = (columns: number): MatrixRow => {
    const matrixRow = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
        const cellData: IMatrixCell = generateMatrixCell();
        matrixRow.push(cellData);
    }
    return matrixRow;
};

export const generateMatrix = (columns: number, rows: number): MatrixRow[] => {
    const matrix: MatrixRow[] = [];
    // change for to array methods
    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
        const row: MatrixRow = [];
        for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
            const cellData: IMatrixCell = generateMatrixCell();
            row.push(cellData);
        }
        matrix.push(row);
    }
    return matrix;
};

export const calculateAverageValues = (
    matrix: MatrixRow[],
    columnsNumber: number
): MatrixRow => {
    const averages: MatrixRow = [];
    for (let i = 0; i < columnsNumber; i += 1) {
        const sum: number = matrix
            .map((row: MatrixRow) => row[i].amount)
            .reduce(
                (previousValue: number, currentValue: number) =>
                    previousValue + currentValue,
                0
            );
        averages.push({
            id: nanoid(),
            amount: +(sum / matrix.length).toFixed(0),
            isNearest: false
        });
    }
    return averages;
};

export const findNearestCells = (
    matrix: MatrixRow[],
    id: string,
    amount: number,
    numberToCut: number
): MatrixRow => {
    const nearestCells: MatrixRow = matrix
        .flat()
        .map((cell: IMatrixCell) => cell)
        .filter((cell: IMatrixCell) => cell.id !== id)
        .map((cell: IMatrixCell) => ({
            id: cell.id,
            amount: Math.abs(cell.amount - amount),
            isNearest: false
        }))
        .sort((a: IMatrixCell, b: IMatrixCell) => a.amount - b.amount)
        .slice(0, numberToCut);
    return nearestCells;
};
