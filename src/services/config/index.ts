export const ConfigService = {
  getWeatherAPIKey: () => {
    return process.env.REACT_APP_WEATHER_API_KEY;
  },
};
