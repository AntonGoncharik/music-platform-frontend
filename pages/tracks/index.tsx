import React from 'react';
import Router from 'next/router';
import Cookies from 'cookies';

import { Tracks } from '../../screens';
import { TrackService } from '../../services';

const Container: React.FC = (props: any) => {
  return <Tracks tracks={props.tracks} />;
};

Container.getInitialProps = async (context: any) => {
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
    const result = await TrackService.getTracks({
      headers: {
        Authorization: `jwt ${token}`,
      },
      params: {},
    });
  } catch (error) {}

  return { tracks: [] };
};

export default Container;
