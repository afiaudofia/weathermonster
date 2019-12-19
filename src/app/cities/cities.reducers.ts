import { produce } from 'immer';
import { ICitiesState, CitiesAction, ActionType } from './cities.types';

const initial: ICitiesState = {
  cities: [],
};

export const citiesReducer = (state = initial, action: CitiesAction) => {
  return produce(state, draftState => {
    if (action.type === ActionType.FETCH_CITIES_SUCCESSFULL) {
      draftState.cities = action.payload;
    }
  });
};
