import { connect } from 'react-redux';
import { IThunkDispatch } from '../../shared/types';
import { IStore } from '../../store/rootReducers';
import { WeatherMonster } from './WeatherMonster';
import { DispatchProps, StateProps } from './WeatherMonster.types';
import { fetchCities } from '../../app/cities/cities.actions';
import {
  addCityTemperature,
  removeCityTemperature,
} from '../../app/temperatures/temperatures.actions';

const mapStateToProps = (state: IStore): StateProps => {
  return {
    isFetching: state.temperatures.isFetching,
    temperatures: state.temperatures.temperatures,
    cities: state.cities.cities,
  };
};

const mapDispatchToProps = (dispatch: IThunkDispatch): DispatchProps => {
  return {
    fetchCities: () => {
      dispatch(fetchCities());
    },
    removeCityTemperature: (cityId: number) => {
      dispatch(removeCityTemperature(cityId));
    },
    addCityTemperature: (cityId: number) => {
      dispatch(addCityTemperature(cityId));
    },
  };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(WeatherMonster);

export { connected as WeatherMonsterContainer };
