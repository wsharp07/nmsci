import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssVarsProvider, Sheet } from '@mui/joy';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined">
        <Component {...pageProps} />
      </Sheet>
    </CssVarsProvider>
  );
}

export default MyApp;
