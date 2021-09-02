import React from 'react';

import { Tabs } from '../../ui-kit';
import { MainLayout } from '../../layouts';
import { Track } from '../../components';
import s from './styles.module.scss';

interface ITrack {
  active: boolean;
  name: string;
  time: string;
}

interface ITracks {
  tracks: ITrack[];
}

const View: React.FC<ITracks> = (props) => {
  return (
    <MainLayout>
      <div className={s.container}>
        <Tabs
          list={[{ name: 'all' }, { name: 'my' }]}
          onChange={(e) => {
            console.log(e);
          }}
        >
          {props.tracks.map((item) => {
            return (
              <div key={item.name} className={s.track}>
                <Track {...item} />
              </div>
            );
          })}
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default View;
