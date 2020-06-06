
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
};


const ICON = {
  [THEME.LIGHT]: {
    [ICONS_NAME.HOME]: 'fal fa-home',
    [ICONS_NAME.NEWS]: 'fal fa-newspaper',
    [ICONS_NAME.VIDEO]: 'fal fa-video',
    [ICONS_NAME.MUSIC]: 'fal fa-headphones-alt',
  },
  [THEME.DARK]: {
    [ICONS_NAME.HOME]: 'fal fa-home',
    [ICONS_NAME.NEWS]: 'fal fa-newspaper',
    [ICONS_NAME.VIDEO]: 'fal fa-video',
    [ICONS_NAME.MUSIC]: 'fal fa-headphones-alt',
  },
};

export { ICONS_NAME as default, ICON };
