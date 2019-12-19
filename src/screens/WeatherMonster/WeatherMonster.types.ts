import { City } from '../../app/cities/cities.types';
import { Temperature } from '../../app/temperatures/temperatures.types';
import { ISelectOptions } from '../../components/RenderInput';

export interface IProps {
  addCityTemperature: (cityId: number) => void;
  removeCityTemperature: (cityId: number) => void;
  fetchCities: () => void;
  cities: City[];
  temperatures: Temperature[];
  isFetching: boolean;
}

export type StateProps = Pick<IProps, 'cities' | 'temperatures' | 'isFetching'>;
export type DispatchProps = Pick<
  IProps,
  'addCityTemperature' | 'removeCityTemperature' | 'fetchCities'
>;

export interface IWeatherMonsterForm {
  city: ISelectOptions;
}
