import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { createMatrix, setCells } from 'store/matrix-service/actions';
import { getCellsSelector } from 'store/matrix-service/selectors';
import { CustomTypography, CustomButton, CustomInput } from 'components/shared';
import { MUI_HEADER_STYLES } from './styles';

const useStyles = makeStyles(MUI_HEADER_STYLES);

export const Header: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);

    const cells = useSelector(getCellsSelector);

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
                                onChange={(e) => setColumns(+e.target.value)}
                                value={columns}
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
                                onChange={(e) => setRows(+e.target.value)}
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
                                onChange={(e) =>
                                    dispatch(setCells(+e.target.value))
                                }
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
                    className={classes.createMatrixButton}
                    label="Create matrix"
                    onClick={handleCreateMatrix}
                />
            </Box>
        </Container>
    );
};
