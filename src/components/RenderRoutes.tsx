import { Route, Routes } from 'react-router-dom';
import { pathAuthorizes, pathUnauthorizes } from 'routes';

interface RouteItem {
  path: string;
  id?: string;
  element: any;
}

interface Item {
  isAuthorized: boolean;
}

const routeReturn = (auth: any): any => {
  return auth.map((route: RouteItem) =>
    route.id ? (
      <Route
        key={route.path}
        path={`/${route?.path}/:${route?.id}`}
        element={route.element}
      />
    ) : (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      />
    )
  );
};

const RenderRoutes = (props: Item) => {
  return (
    <Routes>
      {props.isAuthorized
        ? routeReturn(pathAuthorizes)
        : routeReturn(pathUnauthorizes)}
    </Routes>
  );
};

export default RenderRoutes;
