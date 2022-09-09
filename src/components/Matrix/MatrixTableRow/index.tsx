import { FC } from 'react';
import classNames from 'clsx';
import { makeStyles } from '@mui/styles';
import { TableRow } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { IMatrixCell, MatrixRow } from 'utils/types/matrix.interfaces';
import { CustomButtonIcon } from 'components/shared/CustomButtonIcon';
import { MUI_ROW_STYLE } from 'utils/constans/style/table-row';
import { CustomTableCell } from 'components/shared';
import { MUI_MATRIX_BODY_STYLES } from './styles';

interface MatrixTableRowProps {
    data: MatrixRow;
    rowPrefix: number | string;
    isDeletable?: boolean;
    cellClassName?: string;
}

const useStyles = makeStyles({
    ...MUI_MATRIX_BODY_STYLES,
    cellGreen: MUI_ROW_STYLE.cell.green,
    cellBlue: MUI_ROW_STYLE.cell.blue
});

export const MatrixTableRow: FC<MatrixTableRowProps> = ({
    data,
    rowPrefix,
    isDeletable,
    cellClassName
}) => {
    const classes = useStyles();

    const matrixRowSum: number = data
        .map((data: IMatrixCell) => data.amount)
        .reduce((sum: number, currentValue: number) => sum + currentValue, 0);

    return (
        <TableRow className={classes.tableRowWrapper}>
            <CustomTableCell value={rowPrefix} />
            {data.map((cell: IMatrixCell) => (
                <CustomTableCell
                    className={classNames(
                        classes.cellBlue,
                        cellClassName && cellClassName
                    )}
                    key={cell.id}
                    value={cell.amount}
                />
            ))}
            <CustomTableCell
                className={classes.cellGreen}
                value={matrixRowSum}
            />
            {isDeletable && <CustomButtonIcon icon={<ClearIcon />} />}
        </TableRow>
    );
};
