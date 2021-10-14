import React from 'react';
import { Slider } from 'antd';

interface ISlider {
  onChange: (value: number) => void;
  value: number;
}

const View: React.FC<ISlider> = (props) => {
  return <Slider vertical onChange={props.onChange} value={props.value} />;
};

export default View;
