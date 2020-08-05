import Loadable from 'react-loadable';

import DefaultLoader from '../../../../routes/Loaders/Default';

import { ROUTES_NAME, ROUTES_LINKS } from './Enums';


const ROUTES = [{
  id: ROUTES_NAME.HALL_OF_FAME,
  path: ROUTES_LINKS.HALL_OF_FAME,
  component: Loadable({
    loader: () => import('../../HallOfFame'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.VIDEOS,
  path: ROUTES_LINKS.VIDEOS,
  component: Loadable({
    loader: () => import('../../Videos'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.MUSIC,
  path: ROUTES_LINKS.MUSIC,
  component: Loadable({
    loader: () => import('../../Music'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.MOVIES,
    path: ROUTES_LINKS.MOVIES,
  component: Loadable({
    loader: () => import('../../Movies'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.WEB_SERIES,
  path: ROUTES_LINKS.WEB_SERIES,
  component: Loadable({
    loader: () => import('../../WebSeries'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.NEWS,
  path: ROUTES_LINKS.NEWS,
  component: Loadable({
    loader: () => import('../../News'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.BLOGS,
  path: ROUTES_LINKS.BLOGS,
  component: Loadable({
    loader: () => import('../../Blogs'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.TWITTER,
  path: ROUTES_LINKS.TWITTER,
  component: Loadable({
    loader: () => import('../../Twitter'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.POLL,
  path: ROUTES_LINKS.POLL,
  component: Loadable({
    loader: () => import('../../Poll'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.RECYCLE_AND_REUSE,
  path: ROUTES_LINKS.RECYCLE_AND_REUSE,
  component: Loadable({
    loader: () => import('../../RecycleAndReuse'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.HOME,
  path: ROUTES_LINKS.HOME,
  component: Loadable({
    loader: () => import('../../Home'),
    loading: DefaultLoader,
  }),
}, {
  id: ROUTES_NAME.PROFILE,
  path: ROUTES_LINKS.PROFILE,
  exact: false,
  component: Loadable({
    loader: () => import('../../ProfilePage'),
    loading: DefaultLoader,
  }),
}];

export default ROUTES;

