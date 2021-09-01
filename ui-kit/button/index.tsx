import React from 'react';
import { Button } from 'antd';

interface IButton {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const View: React.FC<IButton> = (props) => {
  return (
    <Button onClick={props.onClick} size="large" loading={props.loading} disabled={props.disabled}>
      {props.children}
    </Button>
  );
};

export default View;
