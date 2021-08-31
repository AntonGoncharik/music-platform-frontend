import React from 'react';

import { Input, Button, Text, Title } from '../../ui-kit';
import { Head } from '../../components';
import s from './styles.module.scss';

interface IAuth {
  page: number;
  setPage: (value: number) => void;
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signin: () => void;
  signup: () => void;
}

const View: React.FC<IAuth> = (props) => {
  return (
    <div className={s.container}>
      <Head />
      {props.page === 0 && (
        <div className={s.auth}>
          <div className={s.text}>
            <Title>Signin</Title>
          </div>
          <div className={s.input}>
            <Input value={props.email} onChange={props.setEmail} placeholder="Email" />
          </div>
          <div className={s.input}>
            <Input
              value={props.password}
              onChange={props.setPassword}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className={s.buttons}>
            <Button onClick={props.signin}>
              <Text>Signin</Text>
            </Button>
            <Button onClick={() => props.setPage(1)}>
              <Text>I do not have account yet</Text>
            </Button>
          </div>
        </div>
      )}
      {props.page === 1 && (
        <div className={s.auth}>
          <div className={s.text}>
            <Title>Signup</Title>
          </div>
          <div className={s.input}>
            <Input value={props.email} onChange={props.setEmail} placeholder="Email" />
          </div>
          <div className={s.input}>
            <Input
              value={props.password}
              onChange={props.setPassword}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className={s.buttons}>
            <Button onClick={props.signup}>
              <Text>Signup</Text>
            </Button>
            <Button onClick={() => props.setPage(0)}>
              <Text>I have account already</Text>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
