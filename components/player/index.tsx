import React, { useState, useEffect } from 'react';
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
import { BASE_URL } from '../../constants';
import { getStore } from '../../store';

interface IPlayer {
  active: boolean;
  name: string;
}

let audio: HTMLAudioElement;

const View: React.FC<IPlayer> = (props) => {
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);

  const store = getStore();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      setAudio();
    } else {
      setAudio();
      // play();
    }
  }, [store.playerStore.track]);

  const setAudio = () => {
    if (store.playerStore.track) {
      // audio.src = `${BASE_URL}/tracks/374518d1-68b2-483b-803f-f985a7707338.mp3`;
      // audio.src = `${BASE_URL}/{store.playerStore.track}`;
      audio.volume = 1;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (!store.playerStore.active) {
      store.playerStore.playTrack();
      audio.play();
    } else {
      store.playerStore.pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (value: number) => {
    audio.volume = value;
    setVolume(value);
  };

  const changeCurrentTime = (value: number) => {
    audio.currentTime = value;
    setCurrentTime(value);
  };

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
                onClick={play}
                icon={<PauseOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            ) : (
              <Button
                onClick={play}
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
