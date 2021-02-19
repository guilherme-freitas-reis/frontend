/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import ReactNotification from 'react-notifications-component';
import '../../public/styles/reset.css';
import '../../public/styles/global.css';
import '../components/InputDate/styles.css';
import 'react-notifications-component/dist/theme.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <ReactNotification />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
