import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';

import { colors } from '../styles/colors';
import '../styles/globals.scss';
import { Loader } from '../ui-kit';
import { StoreProvider, useStore } from '../store/provider';

const App = observer(({ Component, pageProps }: AppProps) => {
  const [authLoading, setAuthLoading] = useState(true);

  const router = useRouter();

  const store = useStore();

  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(false);
    }, 500);
  }, []);

  const renderComponent = () => {
    if (authLoading) {
      return (
        <div className="app_container_loader">
          <Loader />
        </div>
      );
    }

    return <Component {...pageProps} />;
  };

  return (
    <>
      <NextNprogress color={colors.blue} startPosition={0.3} stopDelayMs={200} height={2} />
      {renderComponent()}
    </>
  );
});

const RootApp = observer((props: AppProps) => {
  return (
    <StoreProvider {...props.pageProps}>
      <App {...props} />
    </StoreProvider>
  );
});

export default RootApp;
