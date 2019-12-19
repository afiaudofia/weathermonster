import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IStore } from '../store/rootReducers';

export type ThunkInterface<R> = ThunkAction<R, IStore, void, Action>;
export type IThunkDispatch = ThunkDispatch<IStore, void, Action>;

export interface FormProps<T> {
  onSubmit: (arg0: T) => void;
  initialValues?: T;
  isMakingRequest: boolean;
}
