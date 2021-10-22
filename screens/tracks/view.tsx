import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Tabs, Title } from '../../ui-kit';
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
    <div className={s.container}>
      <Tabs list={tabsItems} onChange={(value) => props.changeTab(value)}>
        <div className={classNameTracks()}>
          <InfiniteScroll
            dataLength={props.tracks.length}
            next={props.getMoreTracks}
            hasMore={props.hasMoreTracks}
            loader={<h3> Loading...</h3>}
          >
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
          </InfiniteScroll>
        </div>
      </Tabs>
    </div>
  );
};

export default View;
