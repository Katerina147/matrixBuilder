import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import {
    getColumnsSelector,
    getMartrixSelector
} from 'store/matrix-service/selectors';
import { MatrixTableRow } from 'components/Matrix/MatrixTableRow';
import { CustomButton, CustomTable, CustomTableCell } from 'components/shared';
import { MUI_ROW_STYLE } from 'utils/constans/style/table-row';
import { calculateAverageValues } from 'utils/helpers/matrix';
import { addMatrixRow } from 'store/matrix-service/actions';
import { MatrixRow } from 'utils/types';
import { getTableHeadings } from 'utils/helpers';
import { Box } from '@mui/system';
import { MUI_MATRIX_TABLE_STYLES } from './styles';

const useStyles = makeStyles({
    ...MUI_MATRIX_TABLE_STYLES,
    cellGreen: MUI_ROW_STYLE.cell.green
});

export const MatrixTable: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const matrix: MatrixRow[] = useSelector(getMartrixSelector);

    const columnsNumber: number = useSelector(getColumnsSelector);

    const matrixHeadings: string[] = getTableHeadings(columnsNumber);

    const matrixAverage: MatrixRow = useMemo(
        () => calculateAverageValues(matrix, columnsNumber),
        [matrix]
    );

    return (
        <Box>
            <CustomButton
                className={classes.addRowButton}
                label="Add row"
                onClick={() => dispatch(addMatrixRow(columnsNumber))}
            />
            <TableContainer className={classes.tableWrapper}>
                <CustomTable>
                    <TableHead>
                        <TableRow>
                            {matrixHeadings.map((item: string) => (
                                <CustomTableCell key={item} value={item} />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {matrix.map((row: MatrixRow, index: number) => (
                            <MatrixTableRow
                                data={row}
                                rowIndex={index}
                                rowPrefix={index + 1}
                                key={row[0].id}
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
        </Box>
    );
};
