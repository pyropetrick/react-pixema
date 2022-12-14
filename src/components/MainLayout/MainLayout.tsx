import { Header, SideBar } from "components";
import { ReactNode } from "react";
import { Content, StyledMainLayout } from "./styles";

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <StyledMainLayout>
      <SideBar />
      <Content>
        <Header />
        {children}
      </Content>
    </StyledMainLayout>
  );
};
