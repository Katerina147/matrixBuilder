import { theme } from 'utils/theme/matrix-theme';

export const MUI_HEADER_STYLES = {
    boxWrapper: {
        backgroundColor: theme.palette.primary,
        padding: '20px'
    },
    customButton: {
        '&.MuiButton-root': {
            margin: '0px auto',
            display: 'block',
            padding: '0 30px',
            border: 0,
            color: 'red',
            fontWeight: 'bold',
            height: 48,
            outline: 'none',
            borderRadius: '6px',
            background: 'linear-gradient(#abe4f8, #74d0f4)',
            boxShadow: '0px 0px 20px -6px #000000'
        }
    },
    title: {
        '&.MuiTypography-root': {
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.cellYellow
        }
    },
    content: {
        '&.MuiContainer-root': {
            margin: '50px'
        }
    },
    headerParagraph: {
        '&.MuiTypography-body1': {
            color: theme.palette.mainWhite,
            fontWeight: 'bold'
        }
    },
    customInput: {
        '&.MuiTextField-root': {
            backgroundColor: theme.palette.mainWhite,
            borderRadius: '6px',
            boxShadow: ' 0px 0px 15px -6px #000000',
            width: '150px'
        }
    }
};
