import React from 'react';
import { Menu } from 'antd';

interface IItem {
  key: string;
  icon: string;
}

interface IMenu {
  items: IItem[];
  onClick: () => void;
  selectedKeys: string[];
}

const View: React.FC<IMenu> = (props) => {
  return (
    <>
      {props.items.map((item) => {
        return (
          <Menu onClick={props.onClick} selectedKeys={props.selectedKeys} mode="horizontal">
            <Menu.Item key={item.key}>{item.key}</Menu.Item>
          </Menu>
        );
      })}
    </>
  );
};

export default View;
