import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import View from './view';
import { ITracks } from './interfaces';
import { getStore } from '../../store';

const Container: React.FC<ITracks> = observer((props) => {
  const [activeTab, setActiveTab] = useState('All');
  const [tracks, setTracks] = useState(props.tracks);

  const store = getStore();

  useEffect(() => {
    if (activeTab === 'All') {
      setTracks(
        props.tracks.map((item) => {
          if (item.path === store.playerStore.track) {
            return { ...item, active: store.playerStore.active };
          }
          return { ...item };
        }),
      );
    }

    if (activeTab === 'My') {
      setTracks(
        // @ts-ignore
        props.userTracks.map((item) => {
          if (item.path === store.playerStore.track) {
            return { ...item, active: store.playerStore.active };
          }
          return { ...item };
        }),
      );
    }
  }, [activeTab]);

  useEffect(() => {
    setTracks(
      props.tracks.map((item) => {
        if (item.path === store.playerStore.track) {
          return { ...item, active: store.playerStore.active };
        }
        return { ...item };
      }),
    );
  }, [store.playerStore.track, store.playerStore.active]);

  const changeTab = (value: string) => {
    setActiveTab(value);
  };

  const playTrack = (path: string, name: string) => {
    if (store.playerStore.track !== path) {
      store.playerStore.setTrack(path, name);
    }
    setTimeout(() => {
      store.playerStore.pauseTrack();
      store.playerStore.playTrack();
    });
  };

  const pauseTrack = (path: string) => {
    store.playerStore.pauseTrack();
  };

  return (
    <View tracks={tracks} playTrack={playTrack} pauseTrack={pauseTrack} changeTab={changeTab} />
  );
});

export default Container;
