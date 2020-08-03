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
  HALL_OF_FAME: `${baseName}/hall-of-fame`,
  VIDEOS: `${baseName}/videos`,
  MUSIC: `${baseName}/music`,
  MOVIES: `${baseName}/movies`,
  WEB_SERIES: `${baseName}/web-series`,
  NEWS: `${baseName}/news`,
  BLOGS: `${baseName}/blogs`,
  TWITTER: `${baseName}/twitter`,
  POLL: `${baseName}/poll`,
  RECYCLE_AND_REUSE: `${baseName}/recycle-and-reuse`,
  PROFILE: `${baseName}/profile`,
  FEEDS: `${baseName}`,
};

export {
  baseName,
  ROUTES_NAME,
  ROUTES_LINKS,
};
