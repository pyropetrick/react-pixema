import { RouterLink } from "components";
import { ROUTE } from "router";
import { Name, ProfileIcon, StyledProfile } from "./styles";

interface IProps {
  name: string;
  isAuth: boolean;
}

export const Profile = ({ name, isAuth }: IProps) => {
  const profileNameWords = name.split(" ");
  return (
    <StyledProfile>
      <ProfileIcon>{isAuth ? `${name[0]}${profileNameWords[1][0]}` : "icon"}</ProfileIcon>
      {isAuth ? <Name>{name}</Name> : <RouterLink to={ROUTE.LOGIN}>Sign in</RouterLink>}
    </StyledProfile>
  );
};
