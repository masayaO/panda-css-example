import {FC, ReactNode} from "react";
import {RecipeVariantProps} from "../../../styled-system/css";
import {button} from "./button.css";

type Props = {
  children: ReactNode;
} & RecipeVariantProps<typeof button>;

export const Button: FC<Props> = ({children, ...recipeVariantProps}) => {
  return <button className={button(recipeVariantProps)}>{children}</button>;
};
