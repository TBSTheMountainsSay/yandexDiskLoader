import {axiosInstance} from "../index";
import axios from "axios";

export const yandexAPI={
    uploadFile:(path: string)=>axiosInstance.get(`/upload?path=${path}&fields=href`),
    sendFile:(sendUrl: string, data: File)=>axios.put(sendUrl, data),
};