
const THEME = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  OTHER: 'OTHER',
};

const ICONS_NAME = {
  HOME: 'HOME',
  NEWS: 'NEWS',
  VIDEO: 'VIDEO',
  MUSIC: 'MUSIC',
  SEARCH: 'SEARCH',
  NOTIFICATION: 'NOTIFICATION',
  MESSAGE: 'MESSAGE',
  FRIENDS: 'FRIENDS',
  LIKE: 'LIKE',
  SHARE: 'SHARE',
  MOVIES: 'MOVIES',
  ARTICLES: 'ARTICLES',
};


const ICON = {
  [THEME.LIGHT]: {
    [ICONS_NAME.HOME]: 'fal fa-home',
    [ICONS_NAME.NEWS]: 'fal fa-newspaper',
    [ICONS_NAME.VIDEO]: 'fal fa-video',
    [ICONS_NAME.MUSIC]: 'fal fa-headphones-alt',
    [ICONS_NAME.SEARCH]: 'fal fa-search',
    [ICONS_NAME.NOTIFICATION]: 'fas fa-bell',
    [ICONS_NAME.MESSAGE]: 'fas fa-comments-alt',
    [ICONS_NAME.FRIENDS]: 'fas fa-users',
    [ICONS_NAME.LIKE]: 'fas fa-thumbs-up',
    [ICONS_NAME.SHARE]: 'fas fa-share-alt',
    [ICONS_NAME.MOVIES]: 'fal fa-film-alt',
    [ICONS_NAME.ARTICLES]: 'fal fa-file-alt',
  },
  [THEME.DARK]: {
    [ICONS_NAME.HOME]: 'fal fa-home',
    [ICONS_NAME.NEWS]: 'fal fa-newspaper',
    [ICONS_NAME.VIDEO]: 'fal fa-video',
    [ICONS_NAME.MUSIC]: 'fal fa-headphones-alt',
    [ICONS_NAME.SEARCH]: 'fal fa-search',
    [ICONS_NAME.NOTIFICATION]: 'fas fa-bell',
    [ICONS_NAME.MESSAGE]: 'fas fa-comments-alt',
    [ICONS_NAME.FRIENDS]: 'fas fa-users',
    [ICONS_NAME.SHARE]: 'fas fa-share-alt',
    [ICONS_NAME.MOVIES]: 'fal fa-film-alt',
    [ICONS_NAME.ARTICLES]: 'fal fa-file-alt ',
  },
};

export { ICONS_NAME as default, ICON };
