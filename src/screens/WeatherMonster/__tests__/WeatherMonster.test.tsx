import * as React from 'react';
import { render } from '@testing-library/react';
import { WeatherMonster } from '../WeatherMonster';
import { IProps } from '../WeatherMonster.types';

const defaultProps: IProps = {
  isFetching: false,
  temperatures: [],
  cities: [],
  fetchCities: jest.fn(),
  removeCityTemperature: jest.fn(),
  addCityTemperature: jest.fn(),
};

describe('<WeatherMonster />', () => {
  it('should render with no temperatures', () => {
    const { getByText } = render(<WeatherMonster {...defaultProps} />);
    expect(getByText('Please select a city to view its temperature')).toBeInTheDocument();
  });

  it('should render with temperatures', () => {
    const temperatures = [
      {
        cityId: 1,
        name: 'Hello City',
        minimumTemperature: 1,
        maximumTemperature: 2,
      },
    ];
    const { getByText } = render(<WeatherMonster {...defaultProps} temperatures={temperatures} />);
    expect(getByText('Hello City')).toBeInTheDocument();
  });

  it('should disable submit button when isFetching is true', () => {
    const { getByText } = render(<WeatherMonster {...defaultProps} isFetching={true} />);
    expect(getByText('Add City')).toBeDisabled();
  });
});
