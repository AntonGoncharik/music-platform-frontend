import React from 'react';

import { Head, Header, Navbar } from '../components';

interface IMainLayout {
  description?: string;
}

const MainLayout: React.FC<IMainLayout> = (props) => {
  return (
    <>
      <Head />
      <Header />
      <Navbar />
      <div>{props.children}</div>
      {/* <Player /> */}
    </>
  );
};

export default MainLayout;
