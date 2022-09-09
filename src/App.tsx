import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/styles';
import { getMartrixSelector } from 'store/matrix-service/selectors';
import { MatrixTable } from 'components/Matrix';
import { Header } from 'components/Header';
import { MatrixData } from 'utils/types';
import { theme } from 'utils/theme/matrix-theme';
import 'App.css';

const App: FC = () => {
    const matrix: MatrixData = useSelector(getMartrixSelector);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            {!!matrix.length && <MatrixTable />}
        </ThemeProvider>
    );
};

export default App;
