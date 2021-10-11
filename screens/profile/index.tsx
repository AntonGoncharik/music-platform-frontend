import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import View from './view';
import { useInput } from '../../hooks';
import { IUser } from '../../interfaces';
import { UsersService } from '../../services';
import { Notification } from '../../ui-kit';
import { getStore } from '../../store';

const Container: React.FC<IUser> = observer((props) => {
  const [firstName, setFirstName] = useInput(props.firstName ?? '');
  const [lastName, setLastName] = useInput(props.lastName ?? '');
  const [image, setImage] = useState(null);

  const store = getStore();

  const setImg = (img: any) => {
    setImage(img);
  };

  const save = async () => {
    try {
      await UsersService.updateUser({ id: props.id, firstName, lastName });

      if (image) {
        const formData = new FormData();
        formData.append('id', props.id as string);
        formData.append('avatar', image);

        await UsersService.updateUser(formData, {
          headers: { contentType: 'multipart/form-data' },
        });

        setImage(null);
      }

      Notification.success('User has been updated');
    } catch (error: any) {
      Notification.error(error.message);
    }
  };

  const removeImage = async () => {
    try {
      await UsersService.updateUser({ id: props.id, avatarPath: '' });

      setImage(null);
      store.userStore.setAvatarPath('');

      Notification.success('User has been updated');
    } catch (error: any) {
      Notification.error(error.message);
    }
  };

  return (
    <View
      email={props.email ?? ''}
      firstName={firstName}
      lastName={lastName}
      avatarPath={store.userStore.avatarPath}
      setFirstName={setFirstName}
      setLastName={setLastName}
      save={save}
      setImg={setImg}
      removeImage={removeImage}
    />
  );
});

export default Container;
