import { action } from 'typesafe-actions';
import { temperaturesReducer } from '../temperatures.reducers';
import { ActionType, ITemperatureState, Temperature } from '../temperatures.types';

let initialState: ITemperatureState;

beforeAll(() => {
  initialState = {
    temperatures: [
      { cityId: 1, name: 'Some City 1', minimumTemperature: 1, maximumTemperature: 2 },
      { cityId: 2, name: 'Some City 2', minimumTemperature: 5, maximumTemperature: 6 },
    ],
    isFetching: false,
  };
});

describe('Temperatue Reducers', () => {
  it('should return the initial state', () => {
    expect(temperaturesReducer(initialState, action(''))).toMatchObject(initialState);
  });

  it('set and order temperatures', () => {
    const payload = {
      cityId: 3,
      name: 'Some City 3',
      minimumTemperature: 3,
      maximumTemperature: 4,
    };
    const newState = temperaturesReducer(
      initialState,
      action(ActionType.FETCH_TEMPERATURE_SUCCESSFULL, payload),
    );
    expect(newState.temperatures).toHaveLength(3);
    expect(newState.temperatures[0].cityId).toBe(2);
    expect(newState.temperatures[1].cityId).toBe(3);
    expect(newState.temperatures[2].cityId).toBe(1);
  });

  it('remove temperature', () => {
    const newState = temperaturesReducer(
      initialState,
      action(ActionType.REMOVE_CITY_TEMPERATURE, 1),
    );

    expect(newState.temperatures).toHaveLength(1);
  });

  it('toggles fetching state on', () => {
    const newState = temperaturesReducer(
      initialState,
      action(ActionType.FETCH_TEMPERATURE_REQUEST),
    );

    expect(newState.isFetching).toBe(true);
  });

  it('toggles fetching state off', () => {
    const newState = temperaturesReducer(
      { ...initialState, isFetching: true },
      action(ActionType.FETCH_TEMPERATURE_FAILED),
    );

    expect(newState.isFetching).toBe(false);
  });
});
