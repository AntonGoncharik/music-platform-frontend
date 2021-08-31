import React from 'react';
import { Menu } from 'antd';

import s from './styles.module.scss';

interface IItem {
  key: string;
  icon: string;
}

interface IMenu {
  items: IItem[];
  onClick: (event: any) => void;
  selectedKeys: string[];
}

const View: React.FC<IMenu> = (props) => {
  return (
    <Menu
      onClick={props.onClick}
      selectedKeys={props.selectedKeys}
      mode="horizontal"
      className={s.navbar}
    >
      {props.items.map((item) => {
        return <Menu.Item key={item.key}>{item.key}</Menu.Item>;
      })}
    </Menu>
  );
};

export default View;
