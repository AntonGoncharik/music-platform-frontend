import React from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IInput {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

const View: React.FC<IInput> = (props) => {
  if (props.type === 'password') {
    return (
      <Input.Password
        value={props.value}
        onChange={props.onChange}
        size="large"
        placeholder={props.placeholder}
        type={props.type}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        disabled={props.disabled}
      />
    );
  }

  return (
    <Input
      value={props.value}
      onChange={props.onChange}
      size="large"
      placeholder={props.placeholder}
      type={props.type}
      disabled={props.disabled}
    />
  );
};

export default View;
