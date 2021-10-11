import React, { useEffect } from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react-lite';

import { Menu } from '../../ui-kit';
import { navbarItems } from '../../constants';
import s from './styles.module.scss';
import { getStore } from '../../store';

const View: React.FC = observer(() => {
  const store = getStore();

  const activeItemNavbar = store.userStore.activeItemNavbar;

  useEffect(() => {
    if (Router.pathname === '/profile') {
      store.userStore.setActiveItemNavbar('profile');
    }
  }, []);

  return (
    <div>
      <Menu
        items={navbarItems}
        selectedKeys={[activeItemNavbar]}
        onClick={(event) => {
          store.userStore.setActiveItemNavbar(event.key);
          Router.push(`/${event.key}`);
        }}
      />
    </div>
  );
});

export default View;
