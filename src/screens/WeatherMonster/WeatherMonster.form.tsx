import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { RenderDropDownSelect, SubmitButton } from '../../components/RenderInput';
import { IWeatherMonsterForm } from './WeatherMonster.types';
import { City } from '../../app/cities/cities.types';
import { FormProps } from '../../shared/types';
import { required } from '../../shared/validations';

export interface IProps extends FormProps<IWeatherMonsterForm> {
  cities: City[];
}

export const WeatherMonsterForm: React.SFC<IProps> = ({ onSubmit, isMakingRequest, cities }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => {
        return (
          <div className="search__container">
            <Field name="city" validate={required}>
              {({ input, meta }) => (
                <RenderDropDownSelect
                  label="Type the name of a city"
                  meta={meta}
                  input={input}
                  options={cities.map(city => ({ value: `${city.id}`, label: city.name }))}
                />
              )}
            </Field>
            <SubmitButton
              disabled={submitting || pristine}
              onClick={() => {
                handleSubmit();
              }}
              isMakingRequest={isMakingRequest}
              text="Add City"
            />
          </div>
        );
      }}
    />
  );
};
