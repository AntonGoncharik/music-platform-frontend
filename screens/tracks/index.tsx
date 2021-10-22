import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import View from './view';
import { ITracks } from './interfaces';
import { getStore } from '../../store';
import { TrackService } from '../../services';
import { Notification } from '../../ui-kit';

const Container: React.FC<ITracks> = observer((props) => {
  const [activeTab, setActiveTab] = useState('All');
  const [tracks, setTracks] = useState(props.tracks);
  const [userTracks, setUserTracks] = useState(props.userTracks ?? []);
  const [page, setPage] = useState(2);
  const [hasMoreTracks, setHasMoreTracks] = useState(true);

  const store = getStore();

  useEffect(() => {
    if (activeTab === 'All') {
      setTracks(
        tracks.map((item) => {
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
        userTracks.map((item) => {
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
      tracks.map((item) => {
        if (item.path === store.playerStore.track) {
          return { ...item, active: store.playerStore.active };
        }
        return { ...item, active: false };
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

  const getMoreTracks = async () => {
    try {
      const token = globalThis.localStorage.getItem('token');

      const resultTracks = await TrackService.getTracks({
        headers: {
          Authorization: `jwt ${token}`,
        },
        params: {
          page,
        },
      });

      const resultUserTracks = await TrackService.getTracks({
        headers: {
          Authorization: `jwt ${token}`,
        },
        params: {
          userTracks: 1,
          page,
        },
      });

      if (!resultTracks.length && !resultUserTracks.length) {
        setHasMoreTracks(false);
        return;
      }

      setPage(page + 1);

      setTracks([
        ...tracks,
        ...resultTracks.map((item: any) => {
          return { ...item, active: false };
        }),
      ]);
      setUserTracks([
        ...userTracks,
        ...resultUserTracks.map((item: any) => {
          return { ...item, active: false };
        }),
      ]);
    } catch (error: any) {
      Notification.error(error.message);
    }
  };

  return (
    <View
      tracks={tracks}
      playTrack={playTrack}
      pauseTrack={pauseTrack}
      changeTab={changeTab}
      page={page}
      hasMoreTracks={hasMoreTracks}
      getMoreTracks={getMoreTracks}
    />
  );
});

export default Container;
