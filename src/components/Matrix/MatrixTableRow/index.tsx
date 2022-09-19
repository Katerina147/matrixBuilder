import { FC, useState } from 'react';
import classNames from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { TableRow } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { getNearestCellsSelector } from 'store/matrix-service/selectors';
import { IMatrixCell, MatrixRow } from 'utils/types/matrix.interfaces';
import { CustomButtonIcon } from 'components/shared/CustomButtonIcon';
import { MUI_ROW_STYLE } from 'utils/constans/style/table-row';
import {
    cellIncrement,
    getNearestCell,
    clearNearestCell,
    deleteMatrixRow
} from 'store/matrix-service/actions';
import { calculatePercent } from 'utils/helpers';
import { CustomTableCell } from 'components/shared';
import { MATRIX_COLORS } from 'utils/constans/matrix-colors';
import { MUI_MATRIX_BODY_STYLES } from './styles';

interface MatrixTableRowProps {
    data: MatrixRow;
    rowIndex?: number;
    rowPrefix: number | string;
    cellClassName?: string;
}

const useStyles = makeStyles({
    ...MUI_MATRIX_BODY_STYLES,
    cellGreen: MUI_ROW_STYLE.cell.green,
    cellBlue: MUI_ROW_STYLE.cell.blue
});

export const MatrixTableRow: FC<MatrixTableRowProps> = ({
    data,
    rowIndex,
    rowPrefix,
    cellClassName
}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const nearestCells: IMatrixCell[] = useSelector(getNearestCellsSelector);

    const [showPersentageCells, setShowPersentageCells] = useState(false);

    const matrixRowSum: number = data
        .map((data: IMatrixCell) => data?.amount)
        .reduce((sum: number, currentValue: number) => sum + currentValue, 0);

    return (
        <TableRow className={classes.tableRowWrapper}>
            <CustomTableCell value={rowPrefix} />
            {data.map((cell: IMatrixCell) => {
                const percent: number = calculatePercent(
                    cell.amount,
                    matrixRowSum
                );
                return showPersentageCells ? (
                    <CustomTableCell
                        sx={{
                            background: `linear-gradient(${
                                MATRIX_COLORS.ligthBlue
                            } 0 ${100 - percent}%, red ${percent}% 100%)`
                        }}
                        value={`${percent}%`}
                    />
                ) : (
                    <CustomTableCell
                        className={classNames(
                            nearestCells.some((item) => item.id === cell.id)
                                ? classes.nearestCell
                                : cellClassName || classes.cellBlue
                        )}
                        key={cell.id}
                        value={cell.amount}
                        onClick={() => dispatch(cellIncrement(cell.id))}
                        onMouseEnter={() =>
                            dispatch(getNearestCell(cell.id, cell.amount))
                        }
                        onMouseLeave={() => dispatch(clearNearestCell())}
                    />
                );
            })}
            <CustomTableCell
                className={classes.cellGreen}
                value={matrixRowSum}
                onMouseEnter={() => setShowPersentageCells(true)}
                onMouseLeave={() => setShowPersentageCells(false)}
            />
            {rowIndex !== undefined && (
                <CustomTableCell>
                    <CustomButtonIcon
                        onClick={() => dispatch(deleteMatrixRow(rowIndex))}
                        icon={<ClearIcon />}
                    />
                </CustomTableCell>
            )}
        </TableRow>
    );
};
