import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { defaultTheme, globalStyles } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} className={defaultTheme} />;
}

export default MyApp;
