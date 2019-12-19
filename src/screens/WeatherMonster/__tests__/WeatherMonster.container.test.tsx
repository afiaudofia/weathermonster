import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { WeatherMonsterContainer } from '../WeatherMonster.container';
import { IStore } from '../../../store/rootReducers';

const storeFake = (state: IStore) => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

const fakeStore = {
  cities: {
    cities: [{ id: 1, name: 'some city' }],
  },
  temperatures: {
    temperatures: [
      {
        cityId: 1,
        name: 'Hello City',
        minimumTemperature: 1,
        maximumTemperature: 2,
      },
    ],
    isFetching: false,
  },
};

describe('<WeatherMonsterContainer />', () => {
  it('fires "fetchCities" after component is mounted', () => {
    const store = storeFake(fakeStore);
    render(
      <Provider store={store}>
        <WeatherMonsterContainer />
      </Provider>,
    );

    expect(store.dispatch).toHaveBeenLastCalledWith(expect.any(Function));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('fires "addCityTemperature" after city is added', () => {
    // const store = storeFake(fakeStore);
    // render(
    //   <Provider store={store}>
    //     <WeatherMonsterContainer />
    //   </Provider>,
    // );
    // expect(store.dispatch).toHaveBeenLastCalledWith();
  });

  it('fires "removeCityTemperature" after temperture is removed', () => {
    const store = storeFake(fakeStore);
    const { getByText } = render(
      <Provider store={store}>
        <WeatherMonsterContainer />
      </Provider>,
    );

    fireEvent.click(getByText('Remove'));
    expect(store.dispatch).toHaveBeenLastCalledWith(expect.any(Function));
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
