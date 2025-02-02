import axios from 'axios';

const BASE_URL ="http://"

const axiosInstance =axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials = true;

// axiosInstance.defaults.timeout=3000;

export default axiosInstance;