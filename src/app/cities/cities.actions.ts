import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';
import { ThunkInterface } from '../../shared/types';
import { CitiesAction, ActionType, City } from './cities.types';
import { RequestService, ToastService, ProgressService } from '../../services';

export const fetchCities = (): ThunkInterface<void> => {
  return async (dispatch: Dispatch<CitiesAction>) => {
    ProgressService.start();
    try {
      const response = await RequestService.get('/data/cities.json');
      dispatch(
        action(
          ActionType.FETCH_CITIES_SUCCESSFULL,
          response.data.map((datum: object) => new City(datum)),
        ),
      );
    } catch (e) {
      ToastService.error(e);
    }
    ProgressService.done();
  };
};