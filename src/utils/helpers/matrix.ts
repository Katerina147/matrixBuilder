import { nanoid } from 'nanoid';
import {
    IMatrixCell,
    MatrixData,
    MatrixRow
} from 'utils/types/matrix.interfaces';

export const generateMatrixCell = (): IMatrixCell => ({
    id: nanoid(),
    amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
    isNearest: false
});

export const generateMatrix = (columns: number, rows: number): MatrixData => {
    const matrix: MatrixData = [];
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

export const calculateAverageValues = (matrix: MatrixData): MatrixRow => {
    const sum = matrix.reduce((acc: number[], row, index) => {
        const sumByColumn = matrix.reduce(
            (sum, sumRow) => sum + sumRow[index].amount,
            0
        );
        return [...acc, sumByColumn];
    }, []);
    return sum.map((item) => ({
        id: nanoid(),
        amount: +(item / matrix.length).toFixed(0),
        isNearest: false
    }));
};

export const findNearestCells = (
    matrix: MatrixData,
    id: string,
    amount: number,
    numberToCut: number
) => {
    const nearestCells = matrix
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
