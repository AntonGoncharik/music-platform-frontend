import Router from 'next/router';

import { Button } from '../ui-kit';
import s from './error.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.container}>
      <h1>Sorry, page not found</h1>
      <h1>Please, return to the main page or try again</h1>
      <Button onClick={() => Router.replace('/')}>Return to the main page</Button>
    </div>
  );
};

export default ErrorPage;
