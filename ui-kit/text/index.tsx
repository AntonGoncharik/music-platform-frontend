import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const View: React.FC = (props) => {
  return <Text>{props.children}</Text>;
};

export default View;
