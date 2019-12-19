import { combineReducers } from 'redux';
import { temperaturesReducer } from '../app/temperatures/temperatures.reducers';
import { citiesReducer } from '../app/cities/cities.reducers';

const rootReducers = combineReducers({
  temperatures: temperaturesReducer,
  cities: citiesReducer,
});

export default rootReducers;

export type IStore = ReturnType<typeof rootReducers>;
