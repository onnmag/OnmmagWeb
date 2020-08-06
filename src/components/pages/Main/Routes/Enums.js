const baseName = '/dashboard';

const ROUTES_NAME = {
  HALL_OF_FAME: 'HALL_OF_FAME',
  VIDEOS: 'VIDEOS',
  MUSIC: 'MUSIC',
  MOVIES: 'MOVIES',
  WEB_SERIES: 'WEB_SERIES',
  NEWS: 'NEWS',
  BLOGS: 'BLOGS',
  TWITTER: 'TWITTER',
  POLL: 'POLL',
  RECYCLE_AND_REUSE: 'RECYCLE_AND_REUSE',
  PROFILE: 'PROFILE',
  FEEDS: 'FEEDS',
  HOME: 'HOME',
};

const ROUTES_LINKS = {
  [ROUTES_NAME.HALL_OF_FAME]: `${baseName}/hall-of-fame`,
  [ROUTES_NAME.VIDEOS]: `${baseName}/videos`,
  [ROUTES_NAME.MUSIC]: `${baseName}/music`,
  [ROUTES_NAME.MOVIES]: `${baseName}/movies`,
  [ROUTES_NAME.WEB_SERIES]: `${baseName}/web-series`,
  [ROUTES_NAME.NEWS]: `${baseName}/news`,
  [ROUTES_NAME.BLOGS]: `${baseName}/blogs`,
  [ROUTES_NAME.TWITTER]: `${baseName}/twitter`,
  [ROUTES_NAME.POLL]: `${baseName}/poll`,
  [ROUTES_NAME.RECYCLE_AND_REUSE]: `${baseName}/recycle-and-reuse`,
  [ROUTES_NAME.PROFILE]: `${baseName}/profile`,
  [ROUTES_NAME.HOME]: `${baseName}`,
};

export {
  baseName,
  ROUTES_NAME,
  ROUTES_LINKS,
};
