import { FC } from 'react';
import clsx from 'clsx';
import { TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MUI_MATRIX_TABLECELL_STYLES } from './styles';

interface CustomTableCellProps {
    value?: string | number;
    className?: string;
    onClick?: () => void;
}

const useStyles = makeStyles(MUI_MATRIX_TABLECELL_STYLES);

export const CustomTableCell: FC<CustomTableCellProps> = ({
    value,
    className,
    onClick
}) => {
    const classes = useStyles();
    return (
        <TableCell
            className={clsx(classes.customTableCell, className && className)}
            onClick={onClick}
        >
            {value}
        </TableCell>
    );
};
