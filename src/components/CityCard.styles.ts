import styled from "styled-components";

export const CardWrapper = styled.div`
  flex: 1 0 21%;
  flex-grow: 1;
  height: 100px;
  max-width: calc(100% * (1 / 4) - 3.5%);
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 5px;
  margin: 20px 10px 0px 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #4c5b67;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
`;

export const CityName = styled.div`
  font-weight: bold;
  font-family: "Merriweather", cursive;
  font-size: 20px;
`;

export const DateField = styled.div`
  font-family: "Merriweather", cursive;
  font-size: 15px;
`;

export const Temp = styled.div`
  font-weight: bold;
  margin: 0px 10px;
  font-family: "Merriweather", cursive;
  font-size: 20px;
`;

export const Main = styled.div`
  margin: 0px 10px;
  font-family: "Merriweather", cursive;
  font-size: 15px;
`;

export const Humidity = styled.div`
  font-family: "Merriweather", cursive;
  font-size: 15px;
`;

export const Wind = styled.div`
  font-family: "Merriweather", cursive;
  font-size: 15px;
`;
