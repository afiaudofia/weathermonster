import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { fetchCities } from '../cities.actions';
import { ActionType } from '../cities.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterAll(() => mockAxios.reset());

describe('Cities Action', () => {
  it('calls correct actions when there is no error', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: [
          {
            id: 1,
            name: 'some city'
          },
        ],
      });
    });
    const expectedActions = [
      {
        type: ActionType.FETCH_CITIES_SUCCESSFULL,
        payload: [
          {
            id: 1,
            name: 'some city'
          },
        ],
      },
    ];
    const store = mockStore({ cities: [] });
    await store.dispatch(fetchCities());
    const receivedActions = store.getActions();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('/data/cities.json');
    expect(receivedActions).toEqual(expectedActions);
  });
  it('does not call any action when there are errors', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.reject(false);
    });
    const store = mockStore({ cities: [] });
    await store.dispatch(fetchCities());
    const receivedActions = store.getActions();
    expect(receivedActions).toEqual([]);
  });
});
