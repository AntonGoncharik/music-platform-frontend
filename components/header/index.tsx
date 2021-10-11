import React from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react-lite';

import { Dropdown, Avatar } from '../../ui-kit';
import { menuItems } from '../../constants';
import s from './styles.module.scss';
import { getStore } from '../../store';
import { BASE_URL } from '../../constants';

const View: React.FC = observer(() => {
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
        <Avatar
          src={store.userStore.avatarPath ? `${BASE_URL}/${store.userStore.avatarPath}` : undefined}
        />
      </div>
      <Dropdown name={store.userStore.email} list={menuItems} goToUrl={goToUrl} />
    </div>
  );
});

export default View;
