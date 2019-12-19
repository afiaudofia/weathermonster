import { action } from 'typesafe-actions';
import { citiesReducer } from '../cities.reducers';
import { ActionType, ICitiesState, City } from '../cities.types';

let initialState: ICitiesState;

beforeAll(() => {
  initialState = {
    cities: [],
  };
});

describe('Cities Reducers', () => {
  it('should return the initial state', () => {
    expect(citiesReducer(initialState, action(''))).toMatchObject(initialState);
  });

  it('set cities', () => {
    const newCities = [
      {id: 1, name: 'Some City 1'},
      {id: 2, name: 'Some City 2'},
    ];
    const payload = newCities;

    const newState = {
      cities: newCities,
    };
    expect(citiesReducer(undefined, action(ActionType.FETCH_CITIES_SUCCESSFULL, payload))).toMatchObject(
      newState,
    );
  });
});
