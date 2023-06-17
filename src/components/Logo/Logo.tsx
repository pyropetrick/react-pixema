import { Image } from "./styles";
import { RouterLink } from "components";
import { ROUTE } from "router";

export const Logo = () => {
  return (
    <RouterLink to={ROUTE.HOME}>
      <Image />
    </RouterLink>
  );
};
