import React from "react";
import { SearchBarStyle, SearchbarInputStyle } from "./SearchBar.styles";
import { SearchbarCard } from "./SearchbarCard";

type Props = {
  cityName: string;
  handleInputChange;
  handleSearch;
  cityChosen;
  cities;
  handleDeleteCity;
};

const SearchBar: React.FC<Props> = ({
  cityName,
  handleInputChange,
  handleSearch,
  cityChosen,
  cities,
  handleDeleteCity,
}) => {
  return (
    <>
      <SearchBarStyle>
        <div>
          {cityChosen
            ? cities.map((city, index) => {
                return (
                  <SearchbarCard
                    name={city.name}
                    handleDeleteCity={handleDeleteCity}
                  ></SearchbarCard>
                );
              })
            : null}
          <SearchbarInputStyle
            key="random1"
            value={cityName}
            //placeholder={"search city"}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter" || event.key === ",") {
                handleSearch(cityName);
              }
            }}
          />
        </div>
      </SearchBarStyle>
    </>
  );
};
export default SearchBar;
