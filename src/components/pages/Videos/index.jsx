import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { ROUTES_LINKS, ROUTES_NAME } from '../Main/Routes/Enums';
import { useAppState } from '../../../App';

import Video from './partials/VideoContainer';
import VideosWatch from './partials/Watch';

function VideoRoutes() {
  const { setOnSearch } = useAppState();
  const history = useHistory();

  useEffect(() => {
    setOnSearch({
      callBack: () => {
        history.push(ROUTES_LINKS[ROUTES_NAME.VIDEOS]);
      },
    });
  }, [history, setOnSearch]);

  return (
    <div>
      <Route
        path={ROUTES_LINKS[ROUTES_NAME.VIDEOS]}
        component={Video}
        exact
      />
      <Route
        path={ROUTES_LINKS[ROUTES_NAME.WATCH]}
        component={VideosWatch}
        exact
      />
    </div>
  );
}

export default VideoRoutes;
