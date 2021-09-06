import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';

import { colors } from '../styles/colors';
import '../styles/globals.scss';
import { Loader } from '../ui-kit';

const App = ({ Component, pageProps }: AppProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // autologin
  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(false);
    }, 5000);
  }, []);

  const renderComponent = () => {
    if (authLoading) {
      return <Loader />;
    }

    return <Component {...pageProps} />;
  };

  return (
    <>
      <NextNprogress color={colors.blue} startPosition={0.3} stopDelayMs={200} height={2} />
      {renderComponent()}
    </>
  );
};

export default App;
