import apiRequest from '../../../core/ApiService';
import { ENDPOINTS } from '../../../constants/api-constants';

const TEMP = 'AIzaSyC6ms2etzHOagZA2xwK6WazbBgVvS13Fds';

const SearchApi = (data) => apiRequest(ENDPOINTS.VIDEOS.SEARCH, null, {
  ...data,
  key: TEMP,
});

const VideosList = (data) => apiRequest(ENDPOINTS.VIDEOS.VIDEOS_LIST, null, {
  ...data,
  key: TEMP,
});

export {
  SearchApi,
  VideosList,
};
