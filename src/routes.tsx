import Login from 'infrastructure/unauthorized/Login';
import Regester from 'infrastructure/unauthorized/Regester';
import { Home ,Process,Project,ProjectDetile} from 'views';

interface RouteItem {
  path: string;
  element: any;
  id?: string;
}

interface RouteItemAuthorized {
  path: string;
  element: any;
  id?: string;
}

export const pathAuthorizes: RouteItemAuthorized[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/process',
    element: <Process/>,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/projectDetile',
    id : "id",
    element: <ProjectDetile />,
  },
  {
    path: '*',
    element: <Home />,
  },
];

export const pathUnauthorizes: RouteItem[] = [
  {
    path: '/',
    element: <Login/>,
  },
 {
    path: '/regester',
    element: <Regester/>,
  },
  {
    path: '*',
    element: <Login />,
  },
];
