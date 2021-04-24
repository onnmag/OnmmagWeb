import { useState, useCallback } from 'react';
import useGetApi from './useGetApi';

function usePostApi({ throwError } = {}) {
  const { makeRequest: makeApiRequest, ...args } = useGetApi({
    defaultInProgress: false,
    cancelOnUnmount: false,
    cancelPrevRequest: false,
  });
  const [failed, setFailed] = useState(false);
  const makeRequest = useCallback((apiRequest) => {
    try {
      setFailed(false);
      return  makeApiRequest(apiRequest).then(res => res);
    } catch (error) {
      setFailed(true);
      if (throwError) {
        throw error;
      }
    }
    return null;
  }, [makeApiRequest, throwError]);
  return {
    makeRequest, failed, ...args,
  };
}

export default usePostApi;

