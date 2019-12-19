import get from 'lodash/get';

export interface ITemperatureState {
  temperatures: Temperature[];
  isFetching: boolean;
}

export enum ActionType {
  FETCH_TEMPERATURE_REQUEST = 'FETCH_TEMPERATURE_REQUEST',
  FETCH_TEMPERATURE_SUCCESSFULL = 'FETCH_TEMPERATURE_SUCCESSFULL',
  FETCH_TEMPERATURE_FAILED = 'FETCH_TEMPERATURE_FAILED',
  REMOVE_CITY_TEMPERATURE = 'REMOVE_CITY_TEMPERATURE',
}

interface IFetchTemperatureSuccessfull {
  type: ActionType.FETCH_TEMPERATURE_SUCCESSFULL;
  payload: Temperature;
}

interface IRemoveCityTemperature {
  type: ActionType.REMOVE_CITY_TEMPERATURE;
  payload: number;
}

interface IFetchTemperatureRequest {
  type: ActionType.FETCH_TEMPERATURE_REQUEST;
}

interface IFetchTemperatureFailed {
  type: ActionType.FETCH_TEMPERATURE_FAILED;
}

interface IDefaultAction {
  type: '';
}

export type TemperatureAction =
  | IFetchTemperatureSuccessfull
  | IFetchTemperatureRequest
  | IFetchTemperatureFailed
  | IRemoveCityTemperature
  | IDefaultAction;

export class Temperature {
  cityId: number;
  name: string;
  minimumTemperature: number;
  maximumTemperature: number;

  constructor(jsonData: object) {
    this.cityId = get(jsonData, ['city', 'id']);
    this.name = get(jsonData, ['city', 'name']);
    this.minimumTemperature = get(jsonData, ['list', 0, 'main', 'temp_min']);
    this.maximumTemperature = get(jsonData, ['list', 0, 'main', 'temp_max']);
  }
}
