import makeRequest from '../../../../../../../../core/ApiService';
import { ENDPOINTS } from '../../../../../../../../constants/api-constants';

const signUpApi = (data) => makeRequest(ENDPOINTS.AUTH.SIGN_UP, null, data);

export {
  signUpApi,
};
