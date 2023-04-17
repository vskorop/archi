import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from './const/localstorage';
export var $api = axios.create({
    baseURL: __API,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
