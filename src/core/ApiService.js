import axios from 'axios';

import { REQUEST_METHODS } from '../constants/api-constants';

const { CancelToken } = axios;

export const CancelRequestCode = 'ONNMAG_WEB_CANCEL_REQUEST';

function makeRequest({ endpoint, method, ...customOptions }, urlVariables, params) {
  const variableList = Array.isArray(urlVariables) ? urlVariables : [urlVariables];
  const url = endpoint(...variableList);
  const options = {
    url,
    method,
    ...customOptions,
    headers: {
      // TODO: need to add AUTH headers,
    },
  };
  switch (method) {
    case REQUEST_METHODS.GET:
    case REQUEST_METHODS.DELETE: {
      options.params = params;
      options.data = {};
      break;
    }

    case REQUEST_METHODS.POST:
    case REQUEST_METHODS.PUT: {
      options.data = params;
      break;
    }
    default:
      options.params = params;
  }

  let cancel;
  options.cancelToken = new CancelToken(c => {
    cancel = c.bind(null, CancelRequestCode);
  });

  const reqPromise = axios
    .request(options)
    .then(response => response.data)
    .catch(error => Promise.reject(error));


  reqPromise.cancel = cancel;
  return reqPromise;
}

export default makeRequest;
