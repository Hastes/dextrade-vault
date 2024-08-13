import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import log from 'loglevel';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import AppHeader from './components/app/app-header';
import Web3ModalProvider from './components/app/web3-modal-provider';
import './css/index.scss';
// import { I18nProvider } from './contexts/i18n';
import Pages from './pages';
import Palette from './palette';
import './i18n';
import './gradient';

log.setLevel(log.levels.DEBUG);

export function UI() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const paletteMode = prefersDarkMode ? 'dark' : 'dark'; // TODO: Fix light mode

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
          ...Palette[paletteMode],
        },
        typography: {
          fontFamily: [
            'Gotham',
            'GothamLight',
            '-apple-system',
            'sans-serif',
          ].join(','),
        },
        shape: {
          borderRadius: 17,
        },
      }),
    [paletteMode],
  );
  const renderBody = () => (
    <>
      <CssBaseline />
      <AppHeader />
      <Container maxWidth="sm">
        <Box paddingY={3}>
          <Pages />
        </Box>
      </Container>
    </>
  );

  return (
    <HashRouter>
      {/* <I18nProvider> */}
      <ThemeProvider theme={theme}>
        <Web3ModalProvider>{renderBody()}</Web3ModalProvider>
      </ThemeProvider>
      {/* </I18nProvider> */}
    </HashRouter>
  );
}
