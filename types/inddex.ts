import { MouseEventHandler } from "react";

export interface CustomButtonsProp {
  title: string;
  containerStyles?: string;
  btnType: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
