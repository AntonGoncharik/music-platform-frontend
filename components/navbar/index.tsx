import React, { useState } from 'react';
import Router from 'next/router';

import { Menu } from '../../ui-kit';
import { navbarItems } from '../../constants';
import s from './styles.module.scss';

const View: React.FC = () => {
  const [activeItem, setActiveItem] = useState('tracks');

  return (
    <div>
      <Menu
        items={navbarItems}
        selectedKeys={[activeItem]}
        onClick={(event) => {
          setActiveItem(event.key);
          Router.push(`/${event.key}`);
        }}
      />
    </div>
  );
};

export default View;
