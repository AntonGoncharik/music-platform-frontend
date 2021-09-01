import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface IItemDropdown {
  name: string;
  key: string;
}

interface IDropdown {
  name: string;
  list: IItemDropdown[];
}

const View: React.FC<IDropdown> = (props) => {
  const menu = (
    <Menu>
      {props.list.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <span>{item.name}</span>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {props.name} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default View;
