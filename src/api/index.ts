import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'https://cloud-api.yandex.net/v1/disk/resources',
    withCredentials: true,
    headers: {Authorization: "OAuth "+ process.env.REACT_APP_TOKEN}
});
