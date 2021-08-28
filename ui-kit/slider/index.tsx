import React from 'react';
import { Slider } from 'antd';

interface ISlider {
  onChange: (value: number) => void;
}

const View: React.FC<ISlider> = (props) => {
  return <Slider vertical onChange={props.onChange} />;
};

export default View;
