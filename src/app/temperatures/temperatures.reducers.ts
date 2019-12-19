import { produce } from 'immer';
import { ITemperatureState, TemperatureAction, ActionType } from './temperatures.types';

const initial: ITemperatureState = {
  temperatures: [],
  isFetching: false,
};

export const temperaturesReducer = (state = initial, action: TemperatureAction) => {
  return produce(state, draftState => {
    if (action.type === ActionType.FETCH_TEMPERATURE_SUCCESSFULL) {
      draftState.temperatures.push(action.payload);
      draftState.temperatures.sort((a, b) => b.maximumTemperature - a.maximumTemperature);
    }

    if (action.type === ActionType.REMOVE_CITY_TEMPERATURE) {
      const index = draftState.temperatures.findIndex(temperature => temperature.cityId === action.payload);
      if(index > -1){
        draftState.temperatures.splice(index, 1);
      }
    }

    if (
      action.type === ActionType.FETCH_TEMPERATURE_FAILED ||
      action.type === ActionType.FETCH_TEMPERATURE_SUCCESSFULL
    ) {
      draftState.isFetching = false;
    }

    if (action.type === ActionType.FETCH_TEMPERATURE_REQUEST) {
      draftState.isFetching = true;
    }
  });
};
