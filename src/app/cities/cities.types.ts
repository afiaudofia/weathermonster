import get from 'lodash/get';

export interface ICitiesState {
  cities: City[];
}

export enum ActionType {
  FETCH_CITIES_SUCCESSFULL = 'FETCH_CITIES_SUCCESSFULL',
}

interface IFetchCitiesSuccessfull {
  type: ActionType.FETCH_CITIES_SUCCESSFULL;
  payload: City[];
}

interface IDefaultAction {
  type: '';
}

export type CitiesAction = IFetchCitiesSuccessfull | IDefaultAction;

export class City {
  id: number;
  name: string;

  constructor(jsonData: object) {
    this.id = get(jsonData, 'id');
    this.name = get(jsonData, 'name');
  }
}
