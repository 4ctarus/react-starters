import '@fontsource/poppins';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { IntlProvider } from 'react-intl';

const messagesInFrench = {
  button: 'Button',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Poppins',
          colorScheme: 'light',
          primaryColor: 'indigo',
        }}
      >
        <IntlProvider
          messages={messagesInFrench}
          locale="fr"
          defaultLocale="en"
        >
          <Component {...pageProps} />
        </IntlProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
