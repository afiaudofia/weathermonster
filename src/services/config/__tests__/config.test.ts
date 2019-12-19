import { ConfigService } from '..';

describe('Config Service', () => {
  it('>> getWeatherAPIKey', () => {
    expect(ConfigService.getWeatherAPIKey()).toEqual('SOME_WEATHER_API_KEY');
  });
});
