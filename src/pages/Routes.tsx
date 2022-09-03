import { lazy } from '@loadable/component';
import { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

export enum routesEnum {
  home = '/',
  login = '/login',
  marketplace = '/marketplace/:tab',
  ntfdetail = '/nft-detail/:id',
  profile = '/profile',
}

type CustomRouteProps = RouteProps & { private?: boolean };
const routes: CustomRouteProps[] = [
  {
    path: routesEnum.home,
    exact: true,
    component: lazy(() => import('./HomePage')),
  },
  {
    path: routesEnum.login,
    exact: true,
    component: lazy(() => import('./LoginPage')),
  },
  {
    path: routesEnum.marketplace,
    exact: true,
    component: lazy(() => import('./MarketPlacePage')),
  },
  {
    path: routesEnum.ntfdetail,
    exact: true,
    component: lazy(() => import('./NFTDetail')),
  },
  {
    path: routesEnum.profile,
    exact: true,
    component: lazy(() => import('./ProfilePage')),
  },
];

export const Routes: FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.path} key={route.path as string} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};
