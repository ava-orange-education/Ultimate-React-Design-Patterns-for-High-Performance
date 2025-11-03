import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1/" });

const api = {
    get: (url, config = {}) => axiosInstance.get(url, config)
};

export default api;
