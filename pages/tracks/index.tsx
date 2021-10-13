import React from 'react';
import Cookies from 'cookies';

import { Tracks } from '../../screens';
import { TrackService } from '../../services';

const Container: React.FC = (props: any) => {
  return <Tracks tracks={props.tracks} userTracks={props.userTracks} />;
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
    const result = await TrackService.getTracks({
      headers: {
        Authorization: `jwt ${token}`,
      },
    });
    const resultUserTracks = await TrackService.getTracks({
      headers: {
        Authorization: `jwt ${token}`,
      },
      params: {
        userTracks: 1,
      },
    });

    return {
      props: {
        tracks: result,
        userTracks: resultUserTracks,
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
