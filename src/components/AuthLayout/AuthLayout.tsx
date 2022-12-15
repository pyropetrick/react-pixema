import { ReactNode } from "react";
import { StyledAuthLayout, Image, Content, Copyright } from "./styles";
import logoLight from "assets/img/logo-light.png";
import logoDark from "assets/img/logo-dark.png";
import { getTheme, useAppSelector } from "store";

interface IProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: IProps) => {
  const { theme } = useAppSelector(getTheme);
  return (
    <StyledAuthLayout>
      <Image src={theme === "dark" ? logoLight : logoDark} />
      <Content>{children}</Content>
      <Copyright>© All Rights Reserved</Copyright>
    </StyledAuthLayout>
  );
};
