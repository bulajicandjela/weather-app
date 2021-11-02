//import {useEffect, useState} from "react";
import dateFormat from "dateformat";
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
  const newDate = new Date(props.date * 1000);
  //let month = newDate.toLocaleString("default", { month: "long" });
  //const day = newDate.getDate();
  
  // const [sufix, setSufix] = useState('');

  // useEffect(() => {
  //   switch(day){
  //     case 1: case 21: case 31:
  //     setSufix('st');
  //     break;
  //     case 2: case 22:
  //     setSufix('nd');
  //     break;
  //     case 3: case 23: 
  //     setSufix('rd');
  //     break;
  //     default:
  //     setSufix('th');
  //     break;
  //   }
  //   });

  return (
    <CardWrapper>
      <Container>
        <CityName> {props.name}</CityName>
        <DateField>
          {dateFormat(newDate, "mmmm dS")} 
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
    </CardWrapper>
  );
};


