import React from "react";
import Header from "../components/Header";
import { Wrapper } from "../App.style";
import { City } from "../components/Weather.types";
import { CityCard } from "../components/CityCard";

type Props = {
  cityName: string;
  handleInputChange;
  handleSearch;
  cities: City[];
  cityChosen;
  handleDeleteCity;
  errorMessage;
};

const Cities: React.FC<Props> = ({
  cityName,
  handleSearch,
  handleInputChange,
  cities,
  cityChosen,
  handleDeleteCity,
  errorMessage,
}) => {
  return (
    <>
      <Header
        cityName={cityName}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        cityChosen={cityChosen}
        cities={cities}
        handleDeleteCity={handleDeleteCity}
        errorMessage={errorMessage}
      ></Header>
      <Wrapper>
        {cityChosen
          ? cities.map((city, index) => {
              return (
                <CityCard
                  name={city.name}
                  date={city.date}
                  temp={city.temp}
                  humidity={city.humidity}
                  wind={city.wind}
                  main={city.main}
                  code={city.code}
                ></CityCard>
              );
            })
          : null}
      </Wrapper>
    </>
  );
};
export default Cities;
