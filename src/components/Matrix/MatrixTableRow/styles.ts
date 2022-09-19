import { theme } from 'utils/theme/matrix-theme';

export const MUI_MATRIX_BODY_STYLES = {
    tableRowWrapper: {
        '&.MuiTableRow-root': {
            fontSize: '24px',
            borderRadius: '10px'
        }
    },
    nearestCell: {
        '&.MuiTableCell-root': {
            backgroundColor: theme.palette.cellYellow,
            color: theme.palette.cellTextColor
        }
    }
};
