import React, { useState } from "react";
import Cities from "../pages/Cities";
import { fetchWeatherInfo } from "../API";
import { City } from "../components/Weather.types";

const CitiesContainer: React.FC = () => {
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState<Array<City>>([]);
  const [cityChosen, setCityChoosen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (value: string) => {
    fetchWeatherInfo(value).then((data) => {
      if (data.code === 200) {
        const exist = checkCityExist(data.name);
        console.log(exist);
        if (!exist) {
          setCities([...cities, data]);
          setCityChoosen(true);
          setCityName("");
          setErrorMessage("");
        } else setErrorMessage("City already found!");
        setCityName("");
      } else if (data.code === "404") {
        setErrorMessage("City not found!");
        setCityName("");
      } else if (data.code === "400") {
        setErrorMessage("You must enter a city!");
        setCityName("");
      } else {
        setErrorMessage("Unknown mistake.");
        setCityName("");
      }
    });
  };

  const handleInputChange = (value: string) => {
    setCityName(value);
  };

  const handleDeleteCity = (name: string) => {
    let filtered = cities.filter(function (item) {
      return item.name !== name;
    });
    setCities([...filtered]);
  };

  // const checkCityExist = (name: string) => {
  //   for (let i = 0; i < cities.length; i++) {
  //     if (cities[i].name.localeCompare(name) === 0) {
  //       return true;
  //     }
  //     return false; //pogledaj sum
  //   }
  // };

  const checkCityExist = (name: string) => {
    let found = cities.find((item) => item.name === name);
    if (found) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Cities
      cityName={cityName}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
      cities={cities}
      cityChosen={cityChosen}
      handleDeleteCity={handleDeleteCity}
      errorMessage={errorMessage}
    ></Cities>
  );
};

export default CitiesContainer;
