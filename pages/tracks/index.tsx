import React from 'react';
import Router from 'next/router';

import { Tracks } from '../../screens';
import { TrackService } from '../../services';

const Container: React.FC = () => {
  return <Tracks />;
};

Container.getInitialProps = async (context) => {
  if (!context.store.userStore.isAuth) {
    typeof window !== 'undefined'
      ? Router.push('/auth')
      : context.res.writeHead(301, { Location: '/auth' }).end();
  }

  const result = await TrackService.getTracks();
  console.log(result);
  return {};
};

export default Container;
