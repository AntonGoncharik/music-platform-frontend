import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import View from './view';
import { useInput } from '../../hooks';

const Container: React.FC = observer(() => {
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');

  const save = () => {};

  const removeImage = () => {};

  return (
    <View
      email="aswfasfasfasf"
      firstName={firstName}
      lastName={lastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      save={save}
      removeImage={removeImage}
    />
  );
});

export default Container;
