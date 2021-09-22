import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';

import 'antd/dist/antd.css';
import '../styles/globals.scss';
import { colors } from '../styles/colors';
import { Loader } from '../ui-kit';
import { initializeStore } from '../store';

class RootApp extends App {
  store: any;

  constructor(props: any) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer ? props.initialState : initializeStore();
    this.state = { authLoading: true };
  }

  static async getInitialProps(appContext: any) {
    const store = initializeStore();
    appContext.ctx.store = store;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialState: store,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        authLoading: false,
      });
    }, 1000);
  }

  render() {
    const { Component, pageProps } = this.props;

    if (this.state.authLoading) {
      return (
        <div className="app_container_loader">
          <Loader />
        </div>
      );
    }

    return (
      <Provider {...this.store}>
        <NextNprogress color={colors.blue} startPosition={0.3} stopDelayMs={200} height={2} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default RootApp;
