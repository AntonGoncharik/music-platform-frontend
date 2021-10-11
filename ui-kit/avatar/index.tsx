import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface IAvatar {
  src: string;
}

const View: React.FC<IAvatar> = (props) => {
  return <Avatar src={props.src} icon={props.src ? null : <UserOutlined />} />;
};

export default View;
