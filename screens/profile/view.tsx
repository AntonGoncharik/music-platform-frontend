import React from 'react';

import { Input, Button, Text, Title, UploadImage } from '../../ui-kit';
import s from './styles.module.scss';
import { BASE_URL } from '../../constants';

interface IProfile {
  email: string;
  firstName: string;
  lastName: string;
  avatarPath?: string;
  setFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  save: () => void;
  setImg: (img: any) => void;
  removeImage: () => void;
}

const View: React.FC<IProfile> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.body}>
        <div className={s.left}>
          <UploadImage
            imageUrl={props.avatarPath ? `${BASE_URL}/${props.avatarPath}` : undefined}
            callbackOK={props.setImg}
          />
          <div className={s.buttonRemoveImage}>
            <Button onClick={props.removeImage}>
              <Text>Remove image</Text>
            </Button>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.input}>
            <Input value={props.email} disabled />
          </div>
          <div className={s.input}>
            <Input value={props.firstName} onChange={props.setFirstName} placeholder="First name" />
          </div>
          <Input value={props.lastName} onChange={props.setLastName} placeholder="Last name" />
        </div>
      </div>
      <div className={s.footer}>
        <Button onClick={props.save}>
          <Text>Save</Text>
        </Button>
      </div>
    </div>
  );
};

export default View;
