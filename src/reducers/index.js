import { combineReducers } from 'redux';
import CountriesLib from './reducer_countries';
import CityQuery from './reducer_city_query';
import CityList from './reducer_city_list';

const rootReducer = combineReducers({
    countries: CountriesLib,
    cityQuery: CityQuery,
    cityList: CityList
});

export default rootReducer;
