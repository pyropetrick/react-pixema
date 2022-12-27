import { Profile, Search } from "components";
import { useInput } from "hooks";
import { StyledHeader } from "./styles";
import { useAppSelector, getUser } from "store";

export const Header = () => {
  const search = useInput();
  const { isAuth, name } = useAppSelector(getUser);
  return (
    <StyledHeader>
      <Search {...search} />
      <Profile name={name || ""} isAuth={isAuth} />
    </StyledHeader>
  );
};
