const InitialPage = () => {};

export default InitialPage;

export function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: '/tracks',
    },
  };
}
