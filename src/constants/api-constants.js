import { AUTH0 } from '../core/KEYS';

const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const ENDPOINTS = {
  FEEDS: {
    FETCH_FEEDS: {
      method: REQUEST_METHODS.GET,
      endpoint: ({ pageNumber }) => `https://jsonplaceholder.typicode.com/albums/${pageNumber}/photos`,
    },
    FETCH_POST_600: {
      method: REQUEST_METHODS.GET,
      endpoint: () => 'https://picsum.photos/600/600.jpg',
      responseType: 'arraybuffer',
    },
    FETCH_POST_500: {
      method: REQUEST_METHODS.GET,
      endpoint: () => 'https://picsum.photos/500/500.jpg',
      responseType: 'arraybuffer',
    },
    FETCH_POST_40: {
      method: REQUEST_METHODS.GET,
      endpoint: () => 'https://picsum.photos/40/40.jpg',
      responseType: 'arraybuffer',
    },
  },
  AUTH: {
    SIGN_UP: {
      method: REQUEST_METHODS.POST,
      endpoint: () => `${AUTH0.AUTH_DOMAIN}/dbconnections/signup`,
    },
  },
};

export {
  REQUEST_METHODS,
  ENDPOINTS,
};
