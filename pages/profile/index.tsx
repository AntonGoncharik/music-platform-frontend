import React from 'react';
import Router from 'next/router';

import { Profile } from '../../screens';

const Container: React.FC = () => {
  return <Profile />;
};

// Container.getInitialProps = (context) => {
//   if (!context.store.userStore.isAuth) {
//     typeof window !== 'undefined'
//       ? Router.push('/auth')
//       : context.res.writeHead(301, { Location: '/auth' }).end();
//   }

//   return {};
// };

export default Container;
