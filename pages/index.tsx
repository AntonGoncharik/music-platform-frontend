import { useEffect } from 'react';
import Router from 'next/router';

const Home = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/tracks');
    }
  });

  return <div></div>;
};

export default Home;
