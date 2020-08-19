import { useState, useCallback } from 'react';
import useGetApi from './useGetApi';

function usePostApi({ throwError } = {}) {
  const { makeRequest: makeApiRequest, ...args } = useGetApi({
    defaultInProgress: false,
    cancelOnUnmount: false,
    cancelPrevRequest: false,
  });
  const [failed, setFailed] = useState(false);
  const makeRequest = useCallback(async (apiRequest) => {
    try {
      setFailed(false);
      const response = await makeApiRequest(apiRequest);
      return response;
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

