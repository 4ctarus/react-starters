import '@fontsource/poppins';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={defaultTheme} />;
}

export default MyApp;
