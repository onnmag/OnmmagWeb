import ApiRequest from '../../../core/ApiService';
import { ENDPOINTS } from '../../../constants/api-constants';

const getFeeds = ({ pageNumber }) => ApiRequest(ENDPOINTS.FEEDS.FETCH_FEEDS, { pageNumber });

export {
  getFeeds,
};
