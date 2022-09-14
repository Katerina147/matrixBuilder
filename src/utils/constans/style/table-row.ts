import { theme } from 'utils/theme/matrix-theme';

export const MUI_ROW_STYLE = {
    cell: {
        green: {
            '&.MuiTableCell-root': {
                backgroundColor: theme.palette.primary,
                fontSize: '20px',
                fontWeight: 'bold',
                color: theme.palette.mainWhite,
                borderRadius: '10px',
                borderBottom: 'none'
            }
        },
        blue: {
            '&.MuiTableCell-root': {
                fontSize: '20px',
                backgroundColor: theme.palette.secondary,
                fontWeight: 'bold',
                borderRadius: '10px',
                borderBottom: 'none',
                cursor: 'pointer'
            },
            '&:hover': {
                backgroundColor: theme.palette.cellHover,
                color: 'white'
            }
        }
    }
};
