/* eslint-disable react/jsx-props-no-spreading */
import Router from 'next/router';
import NProgress from 'nprogress';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import ReactNotification from 'react-notifications-component';
import { AuthProvider } from '../contexts/AuthContext';
import '../../public/styles/reset.css';
import '../../public/styles/global.css';
import '../components/InputDate/styles.css';
import 'react-notifications-component/dist/theme.css';

export default class App extends NextApp {
  componentDidMount() {
    NProgress.configure({
      showSpinner: false,
    });

    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', () => NProgress.start());
    Router.events.off('routeChangeComplete', () => NProgress.done());
    Router.events.off('routeChangeError', () => NProgress.done());
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <ThemeProvider theme={{}}>
          <ReactNotification />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    );
  }
}
