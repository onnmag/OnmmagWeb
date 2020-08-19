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
  },
};

export {
  REQUEST_METHODS,
  ENDPOINTS,
};
