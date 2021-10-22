import React from "react";
import { Container } from "./Header.styles";
import SearchBar from "./SearchBar";
import { ErrorCard } from "./ErrorCard";

type Props = {
  cityName: string;
  handleInputChange;
  handleSearch;
  cityChosen;
  cities;
  handleDeleteCity;
  errorMessage;
};

const Header: React.FC<Props> = ({
  cityName,
  handleInputChange,
  handleSearch,
  cityChosen,
  cities,
  handleDeleteCity,
  errorMessage,
}) => {
  return (
    <>
      <Container>
        <SearchBar
          cityName={cityName}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          cityChosen={cityChosen}
          cities={cities}
          handleDeleteCity={handleDeleteCity}
        ></SearchBar>
        {errorMessage !== "" ? (
          <ErrorCard errorMessage={errorMessage}></ErrorCard>
        ) : null}
      </Container>
    </>
  );
};

export default Header;
