import { FC } from 'react';
import { ThemeProvider } from '@mui/styles';
import { Header } from 'components/Header';
import { theme } from './utils/theme';
import './App.css';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
);

export default App;
