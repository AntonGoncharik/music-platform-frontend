import React from 'react';

import View from './view';
import { ITracks } from './interfaces';

const Container: React.FC<ITracks> = (props) => {
  return <View tracks={props.tracks} userTracks={props.userTracks} />;
};

export default Container;
