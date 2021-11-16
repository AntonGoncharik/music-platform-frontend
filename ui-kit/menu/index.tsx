import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import s from './styles.module.scss';

interface IItem {
  key: string;
  name: string;
  icon: string;
}

interface IMenu {
  items: IItem[];
  onClick: (event: any) => void;
  selectedKeys: string[];
}

const icons = {
  profile: <UserOutlined />,
  tracks: <MenuUnfoldOutlined />,
};

const View: React.FC<IMenu> = (props) => {
  return (
    <Menu
      onClick={props.onClick}
      selectedKeys={props.selectedKeys}
      mode="horizontal"
      className={s.navbar}
    >
      {props.items.map((item) => {
        return (
          // @ts-ignore
          <Menu.Item key={item.key} icon={icons[item.icon]} className={s.icon}>
            {item.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default View;
