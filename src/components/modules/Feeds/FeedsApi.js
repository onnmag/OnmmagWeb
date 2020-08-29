import ApiRequest from '../../../core/ApiService';
import { ENDPOINTS } from '../../../constants/api-constants';

const getFeeds = ({ pageNumber }) => ApiRequest(ENDPOINTS.FEEDS.FETCH_FEEDS, { pageNumber });

const getPost600 = () => ApiRequest(ENDPOINTS.FEEDS.FETCH_POST_600);
const getPost500 = () => ApiRequest(ENDPOINTS.FEEDS.FETCH_POST_500);
const getPost40 = () => ApiRequest(ENDPOINTS.FEEDS.FETCH_POST_40);

export {
  getFeeds,
  getPost600,
  getPost40,
  getPost500,
};
