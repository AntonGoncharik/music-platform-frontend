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
  const [viewTracks, setViewTracks] = useState(props.tracks);
  const [page, setPage] = useState(2);
  const [hasMoreTracks, setHasMoreTracks] = useState(true);
  const [loading, setLoading] = useState(false);

  const store = getStore();

  useEffect(() => {
    if (activeTab === 'All') {
      setViewTracks(
        tracks.map((item) => {
          if (item.path === store.playerStore.track) {
            return { ...item, active: store.playerStore.active };
          }
          return { ...item };
        }),
      );
    }

    if (activeTab === 'My') {
      setViewTracks(
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
    setViewTracks(
      viewTracks.map((item) => {
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

  const playTrack = (path: string, name: string, id: string) => {
    if (store.playerStore.track !== path) {
      store.playerStore.setTrack(path, name, id);
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
      setLoading(true);

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

      if (activeTab === 'All') {
        setViewTracks([
          ...tracks,
          ...resultTracks.map((item: any) => {
            return { ...item, active: false };
          }),
        ]);
      }
      if (activeTab === 'My') {
        setViewTracks([
          ...userTracks,
          ...resultUserTracks.map((item: any) => {
            return { ...item, active: false };
          }),
        ]);
      }
    } catch (error: any) {
      Notification.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTrackToUser = async (id: string) => {
    try {
      const userId = store.userStore.userId;

      await TrackService.addTrackToUser({ userId: `${userId}`, id: `${id}` });

      Notification.success('The track has been added ');
    } catch (error: any) {
      Notification.error(error.message);
    }
  };

  const downloadTrack = async (path: string, name: string) => {
    try {
      const trackBlob = await TrackService.downloadTrack(path, { responseType: 'blob' });

      let url = window.URL.createObjectURL(trackBlob);
      let a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.click();
    } catch (error: any) {
      Notification.error(error.message);
    }
  };

  return (
    <View
      tracks={viewTracks}
      playTrack={playTrack}
      pauseTrack={pauseTrack}
      changeTab={changeTab}
      page={page}
      hasMoreTracks={hasMoreTracks}
      getMoreTracks={getMoreTracks}
      addTrackToUser={addTrackToUser}
      downloadTrack={downloadTrack}
      loading={loading}
      activeTab={activeTab}
    />
  );
});

export default Container;
