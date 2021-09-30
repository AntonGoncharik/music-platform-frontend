import React from 'react';
import Router from 'next/router';
import Cookies from 'cookies';

import { Tracks } from '../../screens';
import { TrackService } from '../../services';

const Container: React.FC = (props: any) => {
  return <Tracks tracks={props.tracks} />;
};

Container.getInitialProps = async (context: any) => {
  const cookies = new Cookies(context.req, context.res);
  const token = cookies.get('token') as string;

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const result = await TrackService.getTracks({
    headers: {
      Authorization: `jwt ${token}`,
    },
    params: {},
  });

  return { tracks: [] };
};

export default Container;
