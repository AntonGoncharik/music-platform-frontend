import { useEffect } from 'react';
import Router from 'next/router';

import styles from '../styles/Home.module.css';

const Home = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/tracks');
    }
  });

  return <div className={styles.container}></div>;
};

export default Home;
