import { CITY_LIST } from '../consts/index';

export default function (state = [], action) {
    switch (action.type) {
        case CITY_LIST:
            return action.payload
    }
    return state
}