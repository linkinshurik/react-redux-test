import { COUNTRY_QUERY } from '../consts/index';

export default function (state = null, action) {
    switch (action.type) {
        case COUNTRY_QUERY:
            return action.payload
    }
    return state
}