import { FC } from 'react';
import { TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MUI_MATRIX_TABLECELL_STYLES } from './styles';

interface CustomTableCellProps {
    value?: string | number;
    className?: string;
}

const useStyles = makeStyles(MUI_MATRIX_TABLECELL_STYLES);

export const CustomTableCell: FC<CustomTableCellProps> = ({
    value,
    className
}) => {
    const classes = useStyles();
    return (
        <TableCell
            className={clsx(classes.customTableCell, className && className)}
        >
            {value}
        </TableCell>
    );
};
