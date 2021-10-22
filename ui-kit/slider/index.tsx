import React from 'react';
import { Slider } from 'antd';

import s from './styles.module.scss';

interface ISlider {
  onChange: (value: number) => void;
  value: number;
}

const View: React.FC<ISlider> = (props) => {
  return <Slider className={s.slider} vertical onChange={props.onChange} value={props.value} />;
};

export default View;
