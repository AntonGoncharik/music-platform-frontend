import React from 'react';

import { Tabs, Title } from '../../ui-kit';
import { MainLayout } from '../../layouts';
import { Track } from '../../components';
import s from './styles.module.scss';
import { tabsItems } from '../../constants';
import { ITracks } from './interfaces';

const View: React.FC<ITracks> = (props) => {
  const classNameTracks = () => {
    if (props.tracks.length) {
      return s.tracks;
    }

    return `${s.tracks} ${s.empty}`;
  };

  return (
    <MainLayout>
      <div className={s.container}>
        <Tabs list={tabsItems} onChange={(value) => props.changeTab(value)}>
          <div className={classNameTracks()}>
            {props.tracks.map((item) => {
              return (
                <div key={item.id} className={s.track}>
                  <Track
                    {...item}
                    playTrack={() => props.playTrack(item.path, item.name)}
                    pauseTrack={() => props.pauseTrack(item.path)}
                  />
                </div>
              );
            })}
            {!props.tracks.length && <Title>Empty :(</Title>}
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default View;
