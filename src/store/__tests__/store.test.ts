import { configureStore } from '../configureStore';
import rootReducers from '../rootReducers';

describe('Store exported', () => {
  it('configure store to be defined', () => {
    expect(configureStore()).toBeDefined();
  });

  it('root reducer to be defined', () => {
    expect(rootReducers).toBeDefined();
  });
});
