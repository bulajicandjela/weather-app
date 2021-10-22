import React from "react";
import {
  CardWrapper,
  CityName,
  DateField,
  Temp,
  Container,
  Main,
  Humidity,
  Wind,
} from "./CityCard.styles";
import { City } from "./Weather.types";

export const CityCard = (props: City) => {
  let newDate = new Date(props.date * 1000);
  let month = newDate.toLocaleString("default", { month: "long" });
  let day = newDate.getDate();

  return (
    <CardWrapper>
      <Container>
        <CityName> {props.name}</CityName>
        <DateField>
          {" "}
          {month} {day}th{" "}
        </DateField>
      </Container>
      <Container>
        <Temp> {props.temp}°C</Temp>
        <Main> {props.main}</Main>
      </Container>
      <Container>
        <Humidity>Humidity:{props.humidity}%</Humidity>
        <Wind>Wind:{props.wind}km/h</Wind>
      </Container>
      {/* {props.name} {month} {day} {props.temp}°C {props.main} Humidity:{props.humidity}% Wind:{props.wind}km/h */}
    </CardWrapper>
  );
};
