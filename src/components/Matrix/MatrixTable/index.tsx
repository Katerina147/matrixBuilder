import { FC } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import {
    getColumnsSelector,
    getMartrixSelector
} from 'store/matrix-service/selectors';
import { CustomTable, CustomTableCell } from 'components/shared';
import { MatrixTableRow } from 'components/Matrix/MatrixTableRow';
import { calculateAverageValues, getTableHeadings } from 'utils/helpers';
import { MUI_ROW_STYLE } from 'utils/constans/style/table-row';
import { MatrixData, MatrixRow } from 'utils/types';
import { MUI_MATRIX_TABLE_STYLES } from './styles';

const useStyles = makeStyles({
    ...MUI_MATRIX_TABLE_STYLES,
    cellGreen: MUI_ROW_STYLE.cell.green
});

export const MatrixTable: FC = () => {
    const classes = useStyles();

    const matrix: MatrixData = useSelector(getMartrixSelector);

    const columnsNumber: number = useSelector(getColumnsSelector);

    const matrixHeadings: string[] = getTableHeadings(columnsNumber);

    const matrixAverage: MatrixRow = calculateAverageValues(matrix);

    return (
        <TableContainer className={classes.tableWrapper}>
            <CustomTable>
                <TableHead>
                    <TableRow>
                        {matrixHeadings.map((item: string) => (
                            <CustomTableCell value={item} />
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {matrix.map((row: MatrixRow, index: number) => (
                        <MatrixTableRow
                            data={row}
                            rowPrefix={index + 1}
                            key={nanoid()}
                            isDeletable
                        />
                    ))}
                    <MatrixTableRow
                        cellClassName={classes.cellGreen}
                        data={matrixAverage}
                        rowPrefix="Avg"
                    />
                </TableBody>
            </CustomTable>
        </TableContainer>
    );
};
