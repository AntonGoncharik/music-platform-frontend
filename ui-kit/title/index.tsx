import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const View: React.FC = (props) => {
  return <Title level={4}>{props.children}</Title>;
};

export default View;
