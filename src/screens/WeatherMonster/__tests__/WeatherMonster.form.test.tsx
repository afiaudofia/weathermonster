import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherMonsterForm, IProps } from '../WeatherMonster.form';

const defaultProps: IProps = {
  isMakingRequest: false,
  cities: [],
  onSubmit: jest.fn(),
};

describe('<WeatherMonsterFrom />', () => {
  it('should render', () => {
    render(<WeatherMonsterForm {...defaultProps} />);
    expect(screen).toBeTruthy();
  });
});
