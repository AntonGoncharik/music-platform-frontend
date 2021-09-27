import React, { useState } from 'react';
import { useRouter } from 'next/router';

import View from './view';
import { useInput } from '../../hooks';
import { getStore } from '../../store';

const Container: React.FC = (props: any) => {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const router = useRouter();

  const store = getStore();

  const signin = () => {
    store.userStore.signin(
      { email, password },
      () => router.push('/tracks'),
      () => {},
    );
  };

  const signup = () => {
    store.userStore.signup(
      { email, password },
      () => {},
      () => {},
    );
  };

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
