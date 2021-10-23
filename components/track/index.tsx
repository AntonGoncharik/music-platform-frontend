import React from 'react';
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  PlusOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Button, Text, Title } from '../../ui-kit';

import s from './styles.module.scss';

interface ITrack {
  id: string;
  active: boolean;
  name: string;
  time: string;
  playTrack: () => void;
  pauseTrack: () => void;
  addTrackToUser: () => void;
  downloadTrack: () => void;
  myTrack: boolean;
}

const View: React.FC<ITrack> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={props.active ? s.btn_play_pause : ''}>
          {props.active ? (
            <Button
              onClick={props.pauseTrack}
              icon={<PauseCircleOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          ) : (
            <Button
              onClick={props.playTrack}
              icon={<PlayCircleOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          )}
        </div>
        <div className={s.title}>
          <Title>{props.name}</Title>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.timeLine}>
          <Text>{props.time}</Text>
        </div>
        {!props.myTrack && (
          <div>
            <Button
              onClick={props.addTrackToUser}
              icon={<PlusOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
        )}
        <div className={s.buttonDownload}>
          <Button
            onClick={props.downloadTrack}
            icon={<DownloadOutlined style={{ fontSize: '24px' }} />}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default View;
