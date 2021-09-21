import React from 'react';

import View from './view';
import { useStore } from '../../store/provider';

const Container: React.FC = () => {
  const store = useStore();

  const tracks = [
    { name: '111', time: '03:34', active: false },
    { name: '222', time: '03:45', active: false },
    { name: '333', time: '03:55', active: false },
    { name: '444', time: '03:36', active: true },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
    { name: '555', time: '03:08', active: false },
  ];

  return <View tracks={tracks} />;
};

export default Container;
