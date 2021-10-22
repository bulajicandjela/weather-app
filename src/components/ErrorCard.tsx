import React from "react";
import { ErrorCardStyle } from "./ErrorCard.styles";

type Props = {
  errorMessage;
};

export const ErrorCard = (props: Props) => {
  return <ErrorCardStyle> {props.errorMessage}</ErrorCardStyle>;
};
