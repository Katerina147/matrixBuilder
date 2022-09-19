import { theme } from 'utils/theme/matrix-theme';

export const MUI_MATRIX_TABLE_STYLES = {
    tableWrapper: {
        '&.MuiTableContainer-root': {
            width: '100%',
            margin: '0 auto',
            borderSpacing: '8px'
        }
    },
    addRowButton: {
        '&.MuiButton-root': {
            margin: '50px auto',
            display: 'block',
            padding: '0 30px',
            border: 0,
            backgroundColor: theme.palette.cellYellow,
            color: theme.palette.primary,
            fontWeight: 'bold',
            height: 48,
            borderRadius: '6px',
            boxShadow: '0px 0px 15px -6px #000000'
        },
        '&:hover': {
            backgroundColor: 'red',
            boxShadow: 'none'
        }
    }
};
