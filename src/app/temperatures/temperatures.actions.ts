import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';
import { ThunkInterface } from '../../shared/types';
import { TemperatureAction, ActionType, Temperature } from './temperatures.types';
import { RequestService, ToastService, ConfigService } from '../../services';

const TEMPERATURE_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const addCityTemperature = (cityId: number): ThunkInterface<void> => {
  return async (dispatch: Dispatch<TemperatureAction>) => {
    dispatch(action(ActionType.FETCH_TEMPERATURE_REQUEST));
    try {
      const temperatureRequestPath = `${TEMPERATURE_API_BASE_URL}?id=${cityId}&appid=${ConfigService.getWeatherAPIKey()}`
      const response = await RequestService.get(temperatureRequestPath);
      dispatch(
        action(
          ActionType.FETCH_TEMPERATURE_SUCCESSFULL,
          new Temperature(response.data),
        ),
      );
    } catch (e) {
      dispatch(action(ActionType.FETCH_TEMPERATURE_FAILED));
      ToastService.error(e);
    }
  };
};

export const removeCityTemperature = (cityId: number): ThunkInterface<void> => {
  return async (dispatch: Dispatch<TemperatureAction>) => {
    dispatch(action(ActionType.REMOVE_CITY_TEMPERATURE, cityId));
  };
};