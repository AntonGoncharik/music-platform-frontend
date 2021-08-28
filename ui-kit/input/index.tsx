import React from 'react';
import { Input } from 'antd';

interface IInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const View: React.FC<IInput> = (props) => {
  return <Input value={props.value} onChange={props.onChange} />;
};

export default View;
