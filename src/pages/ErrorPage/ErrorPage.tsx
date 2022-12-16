import { Logo, RouterLink, Title } from "components";
import { ROUTE } from "router";
import { Body, GIF, StyledErrorPage, Text } from "./styles";

export const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <Logo />
      <Body>
        <div>
          <Title variant="h1" text="404. Page not found" />
          <Text>It may have been moved or you just entered the wrong page address</Text>
          <RouterLink to={ROUTE.HOME}>Go home</RouterLink>
        </div>
        <GIF src="https://i.gifer.com/EKkL.gif" alt="я джифка" />
      </Body>
    </StyledErrorPage>
  );
};
