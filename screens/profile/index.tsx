import React, { useState } from 'react';

import View from './view';
import { useInput } from '../../hooks';

const Container: React.FC = () => {
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');

  const save = () => {};

  return (
    <View
      email="aswfasfasfasf"
      firstName={firstName}
      lastName={lastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      save={save}
    />
  );
};

export default Container;
