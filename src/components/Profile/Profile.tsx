import { ArrowDownIcon, UserIcon } from "assets";
import { RouterLink } from "components";
import { useToogle } from "hooks";
import { ROUTE } from "router";
import { useAppDispatch, userSignOut } from "store";
import { DropDown, DropDownItem, Name, ProfileIcon, StyledProfile } from "./styles";

interface IProps {
  name: string;
  isAuth: boolean;
}

export const Profile = ({ name, isAuth }: IProps) => {
  const dispatch = useAppDispatch();
  const [dropDownIsActive, toogleDropDown] = useToogle();
  const profileNameWords = name.split(" ");
  const handleName = () => toogleDropDown();
  const handleLogout = () => {
    dispatch(userSignOut());
    toogleDropDown();
  };
  return (
    <StyledProfile>
      <ProfileIcon>{isAuth ? `${name[0]}${profileNameWords[1][0]}` : <UserIcon />}</ProfileIcon>
      {isAuth ? (
        <Name onClick={handleName}>
          {name} <ArrowDownIcon />
        </Name>
      ) : (
        <RouterLink to={ROUTE.LOGIN}>Sign in</RouterLink>
      )}
      {dropDownIsActive && (
        <DropDown>
          <DropDownItem>
            <RouterLink to={ROUTE.SETTINGS}>Edit Profile</RouterLink>
          </DropDownItem>
          <DropDownItem onClick={handleLogout}>Log Out</DropDownItem>
        </DropDown>
      )}
    </StyledProfile>
  );
};
