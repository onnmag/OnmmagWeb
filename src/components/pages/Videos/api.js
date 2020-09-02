import apiRequest from '../../../core/ApiService';
import { ENDPOINTS } from '../../../constants/api-constants';

const TEMP = 'AIzaSyC6ms2etzHOagZA2xwK6WazbBgVvS13Fds';

const getParams = (data) => ({
  ...data,
  key: TEMP,
});

const SearchApi = (data) => apiRequest(ENDPOINTS.VIDEOS.SEARCH, null, getParams(data));

const VideosListApi = (data) => apiRequest(ENDPOINTS.VIDEOS.VIDEOS_LIST, null, getParams(data));

const CommentsThreadApi = (data) => apiRequest(
  ENDPOINTS.VIDEOS.COMMENTS_THREADS,
  null,
  getParams(data)
);

const ChannelApi = (data) => apiRequest(ENDPOINTS.VIDEOS.CHANNEL, null, getParams(data));

export {
  SearchApi,
  VideosListApi,
  CommentsThreadApi,
  ChannelApi,
};
