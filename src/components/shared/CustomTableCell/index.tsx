import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { TableCell, TableCellProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MUI_MATRIX_TABLECELL_STYLES } from './styles';

interface ICustomTableCellProps extends TableCellProps {
    value?: string | number;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    children?: ReactNode;
}

const useStyles = makeStyles(MUI_MATRIX_TABLECELL_STYLES);

export const CustomTableCell: FC<ICustomTableCellProps> = ({
    value,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    ...rest
}) => {
    const classes = useStyles();
    return (
        <TableCell
            {...rest}
            className={clsx(classes.customTableCell, className && className)}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {value || children}
        </TableCell>
    );
};
