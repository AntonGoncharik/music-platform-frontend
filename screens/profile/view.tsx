import React from 'react';

import { MainLayout } from '../../layouts';
import { Input, Button, Text, Title, UploadImage } from '../../ui-kit';
import s from './styles.module.scss';

interface IProfile {
  email: string;
  firstName: string;
  lastName: string;
  setFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  save: () => void;
  removeImage: () => void;
}

const View: React.FC<IProfile> = (props) => {
  return (
    <MainLayout>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.left}>
            <UploadImage />
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
              <Input
                value={props.firstName}
                onChange={props.setFirstName}
                placeholder="First name"
              />
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
    </MainLayout>
  );
};

export default View;
