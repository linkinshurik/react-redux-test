import { CITY_LIST, COUNTRY_QUERY } from '../consts/index';

export function searchCity(query) {
    return {
        type: COUNTRY_QUERY,
        payload: query
    }
}

export function setCity(arr) {
    return {
        type: CITY_LIST,
        payload: arr
    }
}

