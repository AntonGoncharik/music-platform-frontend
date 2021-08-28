import React from 'react';
import { Skeleton } from 'antd';

interface ISkeleton {
  loading: boolean;
}

const View: React.FC<ISkeleton> = (props) => {
  return <Skeleton active loading={props.loading} />;
};

export default View;
