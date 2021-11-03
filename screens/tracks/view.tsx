import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PlusOutlined } from '@ant-design/icons';

import { Tabs, Title, Loader, Button, Modal, UploadZone } from '../../ui-kit';
import { Track } from '../../components';
import s from './styles.module.scss';
import { tabsItems } from '../../constants';
import { ITracks } from './interfaces';

const View: React.FC<Omit<ITracks, 'userTracks'>> = (props) => {
  const classNameTracks = () => {
    if (props.tracks.length) {
      return s.tracks;
    }

    return `${s.tracks} ${s.empty}`;
  };

  return (
    <div className={s.container}>
      {props.activeTab === 'My' && (
        <div className={s['btn-create-track']}>
          <Button
            onClick={() => props.setVisibleModalCreateTrack(true)}
            icon={<PlusOutlined style={{ fontSize: '24px' }} />}
            type="text"
            loading={props.loading}
          />
        </div>
      )}
      <Modal
        title="Upload tracks"
        visible={props.visibleModalCreateTrack}
        onOk={() => {
          props.uploadTracks();
          props.setVisibleModalCreateTrack(false);
        }}
        onCancel={() => props.setVisibleModalCreateTrack(false)}
        destroyOnClose
      >
        <UploadZone callbackUploadTracks={props.callbackUploadTracks} />
      </Modal>
      <Tabs list={tabsItems} onChange={(value) => props.changeTab(value)}>
        <div className={classNameTracks()}>
          <InfiniteScroll
            dataLength={props.tracks.length}
            next={props.getMoreTracks}
            hasMore={props.hasMoreTracks}
            loader={null}
          >
            {props.tracks.map((item) => {
              return (
                <div key={item.id} className={s.track}>
                  <Track
                    {...item}
                    playTrack={() => props.playTrack(item.path, item.name, item.id)}
                    pauseTrack={() => props.pauseTrack(item.path)}
                    addTrackToUser={() => props.addTrackToUser(item.id)}
                    downloadTrack={() => props.downloadTrack(item.path, item.name)}
                    myTrack={props.activeTab === 'My'}
                    loading={props.loadingDownloadAndAdd}
                  />
                </div>
              );
            })}
            {props.loading && (
              <div className={s.loader}>
                <Loader />
              </div>
            )}
            {!props.tracks.length && <Title>Empty :(</Title>}
          </InfiniteScroll>
        </div>
      </Tabs>
    </div>
  );
};

export default View;
