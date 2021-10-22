import React from "react";
import { SearchCardWrapper } from "./SearchbarCard.styles";

type Props = {
  name: string;
  handleDeleteCity;
};
export const SearchbarCard = (props: Props) => {
  return (
    <SearchCardWrapper onClick={(e) => props.handleDeleteCity(props.name)}>
      {props.name} x
    </SearchCardWrapper>
  );
};
