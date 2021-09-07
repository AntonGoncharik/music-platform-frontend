import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import s from './styles.module.scss';

interface IItemDropdown {
  name: string;
  key: string;
}

interface IDropdown {
  name: string;
  list: IItemDropdown[];
  goToUrl: (url: string) => void;
}

const View: React.FC<IDropdown> = (props) => {
  const menu = (
    <Menu>
      {props.list.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <span onClick={() => props.goToUrl(item.key)}>{item.name}</span>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span className={s.btn_dropdown}>
        {props.name} <DownOutlined />
      </span>
    </Dropdown>
  );
};

export default View;
