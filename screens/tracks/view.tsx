import React from 'react';

import { Tabs } from '../../ui-kit';
import { MainLayout } from '../../layouts';
import { Track } from '../../components';
import s from './styles.module.scss';
import { tabsItems } from '../../constants';
import { ITracks } from './interfaces';

const View: React.FC<ITracks> = (props) => {
  return (
    <MainLayout>
      <div className={s.container}>
        <Tabs
          list={tabsItems}
          onChange={(e) => {
            console.log(e);
          }}
        >
          <div className={s.tracks}>
            {/* {props.tracks.map((item) => {
              return (
                <div key={item.name} className={s.track}>
                  <Track {...item} />
                </div>
              );
            })} */}
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default View;
