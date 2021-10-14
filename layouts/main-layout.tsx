import React from 'react';

import { Head, Header, Navbar, Player } from '../components';

interface IMainLayout {
  description?: string;
}

const MainLayout: React.FC<IMainLayout> = (props) => {
  return (
    <div className="app_container">
      <Head />
      <div className="sticky-header-navbar">
        <Header />
        <Navbar />
      </div>
      {props.children}
      <Player />
    </div>
  );
};

export default MainLayout;
