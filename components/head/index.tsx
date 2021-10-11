import Head from 'next/head';

interface IHead {
  description?: string;
}

const HeadApp: React.FC<IHead> = (props) => {
  return (
    <Head>
      <title>Music</title>
      <meta name="description" content={`Music. + ${props.description}`} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Music, tracks, artists" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default HeadApp;
