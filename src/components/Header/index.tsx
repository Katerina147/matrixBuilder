import { FC } from 'react';
import { Box, Container } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { CustomTypography, CustomButton, CustomInput } from 'components/shared';
import { useDispatch, useSelector } from 'react-redux';
import {
    createMatrix,
    setCells,
    setColumns,
    setRows
} from 'store/matrix-service/actions';
import {
    getCellsSelector,
    getColumnsSelector,
    getRowsSelector
} from 'store/matrix-service/selectors';
import { MUI_STYLES } from './style';

const useStyles = makeStyles(MUI_STYLES);

export const Header: FC = () => {
    const classes = useStyles();

    const columns = useSelector(getColumnsSelector);
    const rows = useSelector(getRowsSelector);
    const cells = useSelector(getCellsSelector);

    const dispatch = useDispatch();

    const handleColumnsChange = (value: string | number) =>
        dispatch(setColumns(value as number));

    const handleRowsChange = (value: string | number) =>
        dispatch(setRows(value as number));

    const handleCellsChange = (value: string | number) =>
        dispatch(setCells(value as number));

    const handleCreateMatrix = () => {
        dispatch(createMatrix(columns, rows));
    };

    return (
        <Container>
            <Box className={classes.boxWrapper}>
                <CustomTypography
                    className={classes.title}
                    variant="h1"
                    label="Matrix builder"
                />
                <Container className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid
                            alignItems="center"
                            justifyContent="center"
                            container
                            item
                            xs={6}
                        >
                            <CustomTypography
                                className={classes.headerParagraph}
                                variant="body1"
                                label="Enter the numder of columns"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="column"
                                value={columns}
                                onChange={handleColumnsChange}
                                type="number"
                                className={classes.customInput}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid
                            alignItems="center"
                            justifyContent="center"
                            container
                            item
                            xs={6}
                        >
                            <CustomTypography
                                className={classes.headerParagraph}
                                variant="body1"
                                label="Enter the numder of rows"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="rows"
                                value={rows}
                                onChange={handleRowsChange}
                                type="number"
                                className={classes.customInput}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid
                            alignItems="center"
                            justifyContent="center"
                            container
                            item
                            xs={6}
                        >
                            <CustomTypography
                                className={classes.headerParagraph}
                                variant="body1"
                                label="Enter the numder of cells"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="cells"
                                value={cells}
                                onChange={handleCellsChange}
                                type="number"
                                className={classes.customInput}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <CustomButton
                    className={classes.customButton}
                    label="Matrix Builder"
                    onClick={handleCreateMatrix}
                />
            </Box>
        </Container>
    );
};
