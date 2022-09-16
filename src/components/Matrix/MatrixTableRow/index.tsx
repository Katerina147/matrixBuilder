import { FC } from 'react';
import classNames from 'clsx';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { TableRow } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { IMatrixCell, MatrixRow } from 'utils/types/matrix.interfaces';
import { CustomButtonIcon } from 'components/shared/CustomButtonIcon';
import { MUI_ROW_STYLE } from 'utils/constans/style/table-row';
import {
    cellIncrement,
    getNearestCell,
    clearNearestCell,
    deleteMatrixRow
} from 'store/matrix-service/actions';
import { CustomTableCell } from 'components/shared';
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

    const matrixRowSum: number = data
        .map((data: IMatrixCell) => data?.amount)
        .reduce((sum: number, currentValue: number) => sum + currentValue, 0);

    return (
        <TableRow className={classes.tableRowWrapper}>
            <CustomTableCell value={rowPrefix} />
            {data.map((cell: IMatrixCell) => (
                <CustomTableCell
                    className={classNames(
                        cell.isNearest
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
            ))}
            <CustomTableCell
                className={classes.cellGreen}
                value={matrixRowSum}
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
