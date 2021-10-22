import { City } from "./components/Weather.types";

export const fetchWeatherInfo = async (query: string): Promise<City> => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric&q=${query}`;
  const data = await (await fetch(endpoint)).json();
  if (data.cod === 200) {
    const { main, weather, name, wind, dt, cod } = data;
    const city: City = {
      humidity: main.humidity,
      main: weather[0].main,
      name: name,
      temp: Math.round(main.temp),
      wind: wind.speed,
      date: dt,
      code: cod,
    };
    return city;
  } else {
    const city: City = {
      humidity: "",
      main: "",
      name: "",
      temp: 0,
      wind: "",
      date: 0,
      code: data.cod,
    };
    return city;
  }
};
