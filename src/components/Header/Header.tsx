import { Profile, Search } from "components";
import { useInput } from "hooks";
import { StyledHeader } from "./styles";

export const Header = () => {
  const search = useInput();
  return (
    <StyledHeader>
      <Search {...search} />
      <Profile name="Pavel" lastName="Chernenko" />
    </StyledHeader>
  );
};
