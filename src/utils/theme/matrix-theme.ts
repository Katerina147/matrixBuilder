import { createTheme } from '@mui/system';
import { MATRIX_COLORS } from 'utils/constans/matrix-colors';

export const theme = createTheme({
    palette: {
        primary: MATRIX_COLORS.mainColor,
        secondary: MATRIX_COLORS.ligthBlue,
        mainRed: MATRIX_COLORS.mainRed,
        mainWhite: MATRIX_COLORS.white,
        cellTextColor: MATRIX_COLORS.cellTextColor,
        cellHover: MATRIX_COLORS.cellHover,
        cellYellow: MATRIX_COLORS.cellYellow
    }
});
