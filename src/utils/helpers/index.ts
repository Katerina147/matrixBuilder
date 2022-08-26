import { nanoid } from 'nanoid';
import {
    IMatrixCell,
    MatrixData,
    MatrixRow
} from 'utils/types/matrix.interfaces';

export const generateMatrixCell = () => ({
    id: nanoid(),
    amount: Math.floor(Math.random() * (1000 - 100 + 1)) + 100
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
