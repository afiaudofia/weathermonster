import * as React from 'react';
import { IProps, IWeatherMonsterForm } from './WeatherMonster.types';
import { WeatherMonsterForm } from './WeatherMonster.form';
import '../../styles/WeatherMonster.scss';

export class WeatherMonster extends React.PureComponent<IProps> {
  componentDidMount() {
    this.props.fetchCities();
  }

  renderCityTemperatures = () => {
    const { temperatures, removeCityTemperature } = this.props;
    if (temperatures.length === 0) {
      return <p>Please select a city to view its temperature</p>;
    }
    return (
      <>
        {temperatures.map(temperature => (
          <div className="city" key={temperature.cityId}>
            <h2>{temperature.name}</h2>
            <p> Min: {temperature.minimumTemperature} </p>
            <p> Max: {temperature.maximumTemperature} </p>
            <button className="btn" onClick={() => removeCityTemperature(temperature.cityId)}>
              {' '}
              Remove{' '}
            </button>
          </div>
        ))}
      </>
    );
  };

  render() {
    const { isFetching, cities } = this.props;
    return (
      <>
        <div className="container">
          <h1> Weather Monster </h1>
          <WeatherMonsterForm
            onSubmit={this.addCityTemperature}
            cities={cities}
            isMakingRequest={isFetching}
          />
          <div className="list">{this.renderCityTemperatures()}</div>
        </div>
      </>
    );
  }

  private addCityTemperature = (weatherMonsterForm: IWeatherMonsterForm) => {
    const cityId = +weatherMonsterForm.city.value;
    const cityIndex = this.props.temperatures.findIndex(
      temperature => temperature.cityId === cityId,
    );
    if (cityIndex === -1) {
      this.props.addCityTemperature(cityId);
    }
  };
}
