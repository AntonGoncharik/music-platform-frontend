import React, { useState, useEffect, useRef } from 'react';
import {
  ForwardOutlined,
  BackwardOutlined,
  PauseOutlined,
  CaretRightOutlined,
  PlusOutlined,
  DownloadOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

import { Button, Text, Slider, Title } from '../../ui-kit';
import s from './styles.module.scss';
import { BASE_URL } from '../../constants';
import { getStore } from '../../store';
import { getFormatTrackTime } from '../../utils';
import { useOutsideClick } from '../../utils/hooks';

let audio: HTMLAudioElement;

const View: React.FC = observer((props) => {
  const [showVolume, setShowVolume] = useState<boolean>(false);
  const [isStartRewind, setIsStartRewind] = useState<boolean>(false);

  const containerProgressbar = useRef(null);
  const progressbar = useRef(null);
  const volumeComponent = useRef(null);

  const store = getStore();

  useEffect(() => {
    const mouseDown = (e: MouseEvent) => {
      if (store.playerStore.track) {
        setIsStartRewind(true);
        const percentProgress = getPercentage(e.clientX, containerProgressbar.current.clientWidth);
        changeProressBar(percentProgress);
        document.body.classList.add('none__select');
      }
    };

    const mouseUp = (e: MouseEvent) => {
      if (isStartRewind) {
        setIsStartRewind(false);
        rewindTrack(store.playerStore.currentTime);
        document.body.classList.remove('none__select');
      }
    };

    const mouseMove = (e: MouseEvent) => {
      if (isStartRewind && e.clientX <= containerProgressbar.current.clientWidth) {
        const percentProgress = getPercentage(e.clientX, containerProgressbar.current.clientWidth);
        changeProressBar(percentProgress);
      }
    };

    containerProgressbar.current.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);

    return () => {
      if (containerProgressbar.current) {
        containerProgressbar.current.removeEventListener('mousedown', mouseDown);
      }
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [isStartRewind, store.playerStore.currentTime]);

  useEffect(() => {
    if (audio) {
      setAudio();
    } else {
      audio = new Audio();
      setAudio();
    }
  }, [store.playerStore.track]);

  useEffect(() => {
    if (audio) {
      play();
    }
  }, [store.playerStore.active]);

  useEffect(() => {
    if (store.playerStore.duration && !isStartRewind) {
      const percentProgress = getPercentage(
        store.playerStore.currentTimeTrack,
        store.playerStore.duration,
      );
      changeProressBar(percentProgress);
    }
  }, [store.playerStore.currentTimeTrack]);

  useOutsideClick(volumeComponent, () => setShowVolume(false));

  const classNameProrgessbar = () => {
    if (isStartRewind) {
      return s.progress;
    }

    return `${s.progress} ${s.active}`;
  };

  const getPercentage = (currentValue: number, value: number): number => {
    return (currentValue / value) * 100;
  };

  const changeProressBar = (percentProgress: number) => {
    progressbar.current.style.width = `${percentProgress}%`;
    store.playerStore.setCurrentTime((store.playerStore.duration * percentProgress) / 100);
  };

  const setAudio = () => {
    if (
      store.playerStore.track &&
      store.playerStore.track.split('tracks/')[1] !== audio.src.split('tracks/')[1]
    ) {
      audio.src = `${BASE_URL}/${store.playerStore.track}`;
      audio.volume = 1;
    }

    audio.onloadedmetadata = () => {
      store.playerStore.setDuration(Math.ceil(audio.duration));
    };
    audio.ontimeupdate = () => {
      store.playerStore.setCurrentTimeTrack(Math.ceil(audio.currentTime));
    };
  };

  const play = () => {
    if (store.playerStore.track && store.playerStore.active) {
      audio.play();
    }

    if (store.playerStore.track && !store.playerStore.active) {
      audio.pause();
    }
  };

  const playTrack = () => {
    if (store.playerStore.track) {
      store.playerStore.playTrack();
    }
  };

  const pauseTrack = () => {
    store.playerStore.pauseTrack();
  };

  const changeVolume = (value: number) => {
    audio.volume = value / 100;
    store.playerStore.setVolume(value);
  };

  const rewindTrack = (value: number) => {
    audio.currentTime = value;
  };

  return (
    <div className={s.container}>
      <div ref={containerProgressbar} className={s.progressbar}>
        <div ref={progressbar} className={classNameProrgessbar()}></div>
        <div className={s.current}>
          <Text>
            {store.playerStore.track ? getFormatTrackTime(store.playerStore.currentTime) : ''}
          </Text>
        </div>
        <div className={s.duration}>
          <Text>
            {store.playerStore.track ? getFormatTrackTime(store.playerStore.duration) : ''}
          </Text>
        </div>
      </div>
      <div className={s.actions}>
        <div className={s.left}>
          <div className={s.button}>
            {store.playerStore.active ? (
              <Button
                onClick={pauseTrack}
                icon={<PauseOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            ) : (
              <Button
                onClick={playTrack}
                icon={<CaretRightOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            )}
          </div>
          <Title>{store.playerStore.trackName}</Title>
        </div>
        <div className={s.right}>
          <div className={s.sound} ref={volumeComponent}>
            <div className={s.button}>
              <Button
                onClick={() => setShowVolume(!showVolume)}
                icon={<SoundOutlined style={{ fontSize: '24px' }} />}
                type="text"
              />
            </div>
            {showVolume && (
              <div className={s.volume}>
                <Slider
                  onChange={(value: number) => {
                    changeVolume(value);
                  }}
                  value={store.playerStore.volume}
                />
              </div>
            )}
          </div>
          <div className={s.button}>
            <Button
              onClick={() => {}}
              icon={<PlusOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
          <div className={s.button}>
            <Button
              onClick={() => {}}
              icon={<DownloadOutlined style={{ fontSize: '24px' }} />}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default View;
