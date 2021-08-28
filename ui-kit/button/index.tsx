import React from 'react';
import { Button } from 'antd';

interface IButton {
  onClick: () => void;
}

const View: React.FC<IButton> = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default View;
