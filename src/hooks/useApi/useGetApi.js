import { useState, useEffect, useCallback, useRef } from 'react';
import { CancelRequestCode } from '../../core/ApiService';

function useGetApi({
                     throwError = true,
                     defaultInProgress = true,
                     cancelOnUnmount = true,
                     cancelPrevRequest = true,
} = {}) {
  const [inProgress, setInProgress] = useState(defaultInProgress);
  const [failed, setFailed] = useState(false);
  const req = useRef(null);

  const makeRequest = useCallback((apiRequest) => {
    if (req.current && cancelPrevRequest) {
      req.current.cancel();
    }
    req.current = apiRequest;
    setInProgress(true);
    setFailed(false);
    return new Promise((res, rej) => {
      apiRequest
        .then(res)
        .then(() => setInProgress(false))
        .catch(error => {
          if (error !== CancelRequestCode) {
            setFailed(true);
            setInProgress(false);
          }
          if (throwError) rej(error);
        });
    });
  }, [cancelPrevRequest, throwError]);

  useEffect(() => () => (
    cancelOnUnmount && req.current && req.current.cancel && req.current.cancel()
  ), [cancelOnUnmount]);
  return {
    makeRequest,
    inProgress,
    failed,
  };
}

export default useGetApi;
