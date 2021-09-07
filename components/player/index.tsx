import React from 'react';
import {
  ForwardOutlined,
  BackwardOutlined,
  PauseOutlined,
  CaretRightOutlined,
  PlusOutlined,
  DownloadOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { Button, Text, Title } from '../../ui-kit';

import s from './styles.module.scss';

interface IPlayer {
  active: boolean;
  name: string;
}

const View: React.FC<IPlayer> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.progressbar}>
        <div className={s.progress} style={{ width: '55%' }}></div>
        <div className={s.current}>
          <Text>34</Text>
        </div>
        <div className={s.duration}>
          <Text>34</Text>
        </div>
      </div>
      <div className={s.actions}>
        <div className={s.left}>
          <div className={s.button}>
            <Button
              onClick={() => {}}
              icon={<BackwardOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
          <div className={s.button}>
            {props.active ? (
              <Button
                onClick={() => {}}
                icon={<PauseOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            ) : (
              <Button
                onClick={() => {}}
                icon={<CaretRightOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            )}
          </div>
          <div className={s.button}>
            <Button
              onClick={() => {}}
              icon={<ForwardOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
          <Text>{props.name}</Text>
        </div>
        <div className={s.right}>
          <div className={s.sound}>
            <Button
              onClick={() => {}}
              icon={<SoundOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
          <div className={s.button}>
            <Button
              onClick={() => {}}
              icon={<PlusOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
          <Button
            onClick={() => {}}
            icon={<DownloadOutlined style={{ fontSize: '24px' }} />}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default View;
