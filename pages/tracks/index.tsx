import { redirect } from 'next/dist/server/api-utils';
import React from 'react';

import { Tracks } from '../../screens';
import { useStore } from '../../store/provider';

const Container: React.FC = () => {
  return <Tracks />;
};

export default Container;

export async function getServerSideProps() {
  // return {
  //   redirect: {
  //     permanent: false,
  //     destination: '/auth',
  //   },
  // };

  return {
    props: {},
  };
}
