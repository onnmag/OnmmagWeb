import { useHistory } from 'react-router-dom';
import React, { useEffect, useState, useMemo } from 'react';

import { useGetApi } from '../../../../../hooks/useApi';
import { getQueryParams } from '../../../../../utils';

import { ROUTES_LINKS, ROUTES_NAME } from '../../../Main/Routes/Enums';

import { ChannelApi, CommentsThreadApi, VideosListApi } from '../../api';
import Watch from '../../../../modules/Watch';

function VideosWatch() {
  const history = useHistory();
  // API Hook
  const {
    makeRequest: makeRequestComments,
    inProgress: commentsInProgress,
  } = useGetApi({ cancelPrevRequest: false, cancelOnUnmount: false });
  const {
    makeRequest: makeRequestChannel, inProgress: channelInProgress,
  } = useGetApi({ cancelPrevRequest: false, cancelOnUnmount: false });
  const {
    makeRequest: makeRequestVideosList, inProgress: videosListInProgress,
  } = useGetApi({ cancelPrevRequest: false, cancelOnUnmount: false });

  const {
    makeRequest: makeRequestRecommendedVideos, inProgress: recommendedVideoInProgress,
  } = useGetApi({ cancelPrevRequest: false, cancelOnUnmount: false });

  // STATES
  const [comments, setComments] = useState({
    items: [],
  });
  const [videoInfo, setVideoInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const [videosList, setVideosList] = useState({
    items: [],
  });
  const [tokens, setTokens] = useState({
    commentsListToken: null,
    videoListToken: null,
  });

  const activeId = useMemo(() => {
    setTokens({
      commentsListToken: null,
      videoListToken: null,
    });
    return getQueryParams()?.id;
  }, [window.location.href]);

  if (!activeId) {
    // Redirect to videos page if watch id not present
    history.push(ROUTES_LINKS[ROUTES_NAME.VIDEOS]);
  }

  // Network calls
  useEffect(() => {
    // fetch selected video Data
    makeRequestVideosList(VideosListApi({
      part: 'snippet,contentDetails,statistics',
      id: activeId,
    })).then(res => {
      setVideoInfo(res);
    }).catch(err => {
      console.log(err);
    });
  }, [activeId, makeRequestVideosList]);

  useEffect(() => {
    // fetch selected video channel Data
    if (videoInfo) {
      makeRequestChannel(ChannelApi({
        part: 'snippet, statistics',
        id: videoInfo?.items[0]?.snippet.channelId,
      })).then(channelData => {
        setChannelInfo(channelData);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [makeRequestChannel, videoInfo]);

  useEffect(() => {
    // fetch selected video comments Data
    const extraParams = tokens.commentsListToken ? { pageToken: tokens.commentsListToken } : {};
    makeRequestComments(CommentsThreadApi({
      videoId: activeId,
      part: 'snippet',
      textFormat: 'plainText',
      ...extraParams,
    }))
      .then(res => {
        if (tokens.commentsListToken) {
          // setComments(res);
          setComments(prevState => ({
            ...res,
            items: prevState.items.concat(res.items),
          }));
        } else {
          setComments(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [activeId, makeRequestComments, tokens.commentsListToken]);

  useEffect(() => {
    // fetch mostPopularVideos channel Data
    const extraParams = tokens.videoListToken ? {
      pageToken: tokens.videoListToken,
      maxResults: 10,
    } : {};
    makeRequestRecommendedVideos(VideosListApi({
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 20,
      ...extraParams,
    })).then(res => {
      if (tokens.videoListToken) {
        setVideosList(prevState => ({
          ...res,
          items: prevState.items.concat(res.items),
        }));
      } else {
        setVideosList(res);
      }
    }).catch(err => {
      console.log(err);
    });
  }, [activeId, makeRequestRecommendedVideos, tokens.videoList, tokens.videoListToken]);

  return (
    <Watch
      data={{
        comments,
        videoInfo,
        channelInfo,
        videosList,
      }}
      inProgress={{
        commentsInProgress,
        recommendedVideoInProgress,
        inProgress: videosListInProgress && channelInProgress,
      }}
      id={activeId}
      setTokens={setTokens}
    />
  );
}

export default VideosWatch;
