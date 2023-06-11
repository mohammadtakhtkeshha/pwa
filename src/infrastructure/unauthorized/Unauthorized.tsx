import RenderRoutes from 'components/RenderRoutes';

const Unauthorized = () => {
  return <RenderRoutes isAuthorized={false} />;
};

export default Unauthorized;
