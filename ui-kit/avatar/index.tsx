import React from 'react';
import { Avatar } from 'antd';

interface IAvatar {
  src: string;
}

const View: React.FC<IAvatar> = (props) => {
  return <Avatar src={props.src} />;
};

export default View;
