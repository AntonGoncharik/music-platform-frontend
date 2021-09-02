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
  active: boolean;
  name: string;
  time: string;
}

const View: React.FC<ITrack> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div>
          {props.active ? (
            <Button
              onClick={() => {}}
              icon={<PauseCircleOutlined style={{ fontSize: '32px' }} />}
              type="text"
            />
          ) : (
            <Button
              onClick={() => {}}
              icon={<PlayCircleOutlined style={{ fontSize: '32px' }} />}
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
        <div>
          <Button
            onClick={() => {}}
            icon={<PlusOutlined style={{ fontSize: '32px' }} />}
            type="text"
          />
        </div>
        <div className={s.buttonDownload}>
          <Button
            onClick={() => {}}
            icon={<DownloadOutlined style={{ fontSize: '32px' }} />}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default View;
