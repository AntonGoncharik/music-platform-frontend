import React from 'react';
import { Button } from 'antd';

import s from './styles.module.scss';

const View: React.FC = () => {
  return (
    <div className={s.container}>
      tracks
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default View;
