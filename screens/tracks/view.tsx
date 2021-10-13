import React, { useState, useEffect } from 'react';

import { Tabs, Title } from '../../ui-kit';
import { MainLayout } from '../../layouts';
import { Track } from '../../components';
import s from './styles.module.scss';
import { tabsItems } from '../../constants';
import { ITracks } from './interfaces';

const View: React.FC<ITracks> = (props) => {
  const [activeTab, setActiveTab] = useState('All');
  const [tracks, setTracks] = useState(props.tracks);

  useEffect(() => {
    if (activeTab === 'All') {
      setTracks(props.tracks);
    }
    if (activeTab === 'My') {
      setTracks(props.userTracks);
    }
  }, [activeTab]);

  const classNameTracks = () => {
    if (props.tracks.length) {
      return s.tracks;
    }

    return `${s.tracks} ${s.empty}`;
  };

  return (
    <MainLayout>
      <div className={s.container}>
        <Tabs list={tabsItems} onChange={(value) => setActiveTab(value)}>
          <div className={classNameTracks()}>
            {tracks.map((item) => {
              return (
                <div key={item.id} className={s.track}>
                  <Track {...item} />
                </div>
              );
            })}
            {!tracks.length && <Title>Empty :(</Title>}
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default View;
