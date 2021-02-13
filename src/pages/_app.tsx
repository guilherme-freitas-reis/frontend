/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import '../../public/styles/reset.css';
import '../../public/styles/global.css';
import '../components/InputDate/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
