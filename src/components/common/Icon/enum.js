
import {
  MdHome, MdBook, MdVideoLibrary, MdLibraryMusic, MdSearch, MdPeople,
  MdNotifications, MdMessage, MdFavorite, MdShare,
  MdLocalMovies, MdLibraryBooks, MdVerifiedUser, MdComment, MdMenu,
} from 'react-icons/md';


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
  VERIFIED: 'VERIFIED',
  COMMENT: 'COMMENT',
  MENU: 'MENU',
};

const ICON = {
  [THEME.LIGHT]: {
    [ICONS_NAME.HOME]: MdHome,
    [ICONS_NAME.NEWS]: MdBook,
    [ICONS_NAME.VIDEO]: MdVideoLibrary,
    [ICONS_NAME.MUSIC]: MdLibraryMusic,
    [ICONS_NAME.SEARCH]: MdSearch,
    [ICONS_NAME.NOTIFICATION]: MdNotifications,
    [ICONS_NAME.MESSAGE]: MdMessage,
    [ICONS_NAME.FRIENDS]: MdPeople,
    [ICONS_NAME.LIKE]: MdFavorite,
    [ICONS_NAME.SHARE]: MdShare,
    [ICONS_NAME.MOVIES]: MdLocalMovies,
    [ICONS_NAME.ARTICLES]: MdLibraryBooks,
    [ICONS_NAME.VERIFIED]: MdVerifiedUser,
    [ICONS_NAME.COMMENT]: MdComment,
    [ICONS_NAME.MENU]: MdMenu,
  },
  [THEME.DARK]: {
    [ICONS_NAME.HOME]: MdHome,
    [ICONS_NAME.NEWS]: MdBook,
    [ICONS_NAME.VIDEO]: MdVideoLibrary,
    [ICONS_NAME.MUSIC]: MdLibraryMusic,
    [ICONS_NAME.SEARCH]: MdSearch,
    [ICONS_NAME.NOTIFICATION]: MdNotifications,
    [ICONS_NAME.MESSAGE]: MdMessage,
    [ICONS_NAME.FRIENDS]: MdPeople,
    [ICONS_NAME.LIKE]: MdFavorite,
    [ICONS_NAME.SHARE]: MdShare,
    [ICONS_NAME.MOVIES]: MdLocalMovies,
    [ICONS_NAME.ARTICLES]: MdLibraryBooks,
    [ICONS_NAME.VERIFIED]: MdVerifiedUser,
    [ICONS_NAME.COMMENT]: MdComment,
    [ICONS_NAME.MENU]: MdMenu,
  },
};

export { ICONS_NAME as default, ICON };
