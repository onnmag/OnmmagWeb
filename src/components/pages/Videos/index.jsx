import React from 'react';
import { Route } from 'react-router-dom';

import { ROUTES_LINKS, ROUTES_NAME } from '../Main/Routes/Enums';

import Video from './partials/VideoContainer';
import VideosWatch from './partials/Watch';

function VideoRoutes() {
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
