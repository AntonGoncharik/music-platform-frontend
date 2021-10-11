import React from 'react';
import Router from 'next/router';

import { Dropdown, Avatar } from '../../ui-kit';
import { menuItems } from '../../constants';
import s from './styles.module.scss';
import { getStore } from '../../store';

const View: React.FC = () => {
  const store = getStore();

  const goToUrl = (url: string) => {
    if (url === 'logout') {
      Router.replace('/auth');
      return;
    }

    store.userStore.setActiveItemNavbar('profile');
    Router.push(`/${url}`);
  };

  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Avatar src={store.userStore.avatarPath} />
      </div>
      <Dropdown name={store.userStore.email} list={menuItems} goToUrl={goToUrl} />
    </div>
  );
};

export default View;
