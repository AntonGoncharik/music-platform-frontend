import React from 'react';

import { Head, Header, Navbar } from '../components';

interface IMainLayout {
  description?: string;
}

const MainLayout: React.FC<IMainLayout> = (props) => {
  return (
    <>
      <Head />
      <div className="sticky-header-navbar">
        <Header />
        <Navbar />
      </div>
      <div>{props.children}</div>
      {/* <Player /> */}
    </>
  );
};

export default MainLayout;