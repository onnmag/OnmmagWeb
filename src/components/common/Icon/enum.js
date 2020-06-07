
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
  },
};

export { ICONS_NAME as default, ICON };
