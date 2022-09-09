import { FC, ReactNode } from 'react';
import { Table } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MUI_MATRIX_CUSTOM_TABLE_STYLES } from './styles';

interface CustomTablbeProps {
    children: ReactNode;
}

const useStyles = makeStyles(MUI_MATRIX_CUSTOM_TABLE_STYLES);

export const CustomTable: FC<CustomTablbeProps> = ({ children }) => {
    const classes = useStyles();
    return <Table className={classes.customTable}>{children}</Table>;
};
