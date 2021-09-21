import React, { useState } from 'react';
import Router from 'next/router';

import View from './view';
import { useInput } from '../../hooks';
import { useStore } from '../../store/provider';

const Container: React.FC = () => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const store = useStore();

  const signin = () => {
    store.signin();
    Router.replace('/tracks');
  };

  const signup = () => {};

  return (
    <View
      page={page}
      setPage={setPage}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signup={signup}
      signin={signin}
    />
  );
};

export default Container;
