import { FC, useState } from 'react';
import { Box, Container } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { CustomTypography, CustomButton, CustomInput } from 'components/shared';
import { MUI_STYLES } from './style';

const useStyles = makeStyles(MUI_STYLES);

export const Header: FC = () => {
    const classes = useStyles('');

    const [colums, setColumns] = useState<number>(0);
    const [rows, setRows] = useState<number>(0);
    const [cells, setCells] = useState<number>(0);

    const handleColumnsChange = (value: string | number) =>
        setColumns(value as number);

    const handleRowsChange = (value: string | number) =>
        setRows(value as number);

    const handleCellsChange = (value: string | number) =>
        setCells(value as number);

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
                                value={colums}
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
                />
            </Box>
        </Container>
    );
};
