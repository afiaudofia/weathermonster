import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { addCityTemperature, removeCityTemperature } from '../temperatures.actions';
import { ActionType } from '../temperatures.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterAll(() => mockAxios.reset());

describe('Cities Action', () => {
  it('works when adding city temperature', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          city: {
            id: 1,
            name: 'some city',
          },
          list: [
            {
              main: {
                temp_min: 1,
                temp_max: 2,
              },
            },
          ],
        },
      });
    });
    const expectedActions = [
      {
        type: ActionType.FETCH_TEMPERATURE_REQUEST,
      },
      {
        type: ActionType.FETCH_TEMPERATURE_SUCCESSFULL,
        payload: {
          cityId: 1,
          name: 'some city',
          minimumTemperature: 1,
          maximumTemperature: 2,
        },
      },
    ];
    const store = mockStore({ temperatures: [] });
    await store.dispatch(addCityTemperature(1));
    const receivedActions = store.getActions();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://api.openweathermap.org/data/2.5/forecast?id=1&appid=SOME_WEATHER_API_KEY',
    );
    expect(receivedActions).toEqual(expectedActions);
  });

  it('does not work when adding city temperature when there are errors', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.reject(false);
    });
    const store = mockStore({ temperatures: [] });
    await store.dispatch(addCityTemperature(1));
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual([
      {
        type: ActionType.FETCH_TEMPERATURE_REQUEST,
      },
      {
        type: ActionType.FETCH_TEMPERATURE_FAILED,
      },
    ]);
  });

  it('works when removing cities', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.reject(false);
    });
    const store = mockStore({ temperatures: [] });
    await store.dispatch(removeCityTemperature(1));
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual([
      {
        type: ActionType.REMOVE_CITY_TEMPERATURE,
        payload: 1,
      },
    ]);
  });
});
