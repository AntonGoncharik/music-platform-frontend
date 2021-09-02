import React from 'react';
import { Button } from 'antd';

interface IButton {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
}

const View: React.FC<IButton> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      size="large"
      loading={props.loading}
      disabled={props.disabled}
      icon={props.icon}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default View;
