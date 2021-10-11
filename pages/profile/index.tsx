import React from 'react';
import Cookies from 'cookies';

import { Profile } from '../../screens';
import { UsersService } from '../../services';
import { IUser } from '../../interfaces';

const Container: React.FC<IUser> = (props) => {
  return <Profile firstName={props.firstName} lastName={props.lastName} email={props.email} />;
};

export default Container;

export async function getServerSideProps(context: any) {
  let token = null;
  try {
    const cookies = new Cookies(context.req, context.res);
    token = cookies.get('token') as string;
  } catch (error) {}

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  try {
    const result = await UsersService.getUserByToken({
      headers: {
        Authorization: `jwt ${token}`,
      },
    });

    return {
      props: {
        firstName: result[0].firstName ?? '',
        lastName: result[0].lastName ?? '',
        email: result[0].email ?? '',
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
}
