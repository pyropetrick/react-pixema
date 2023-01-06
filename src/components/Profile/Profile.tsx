import { ArrowDownIcon, ArrowRightIcon, UserIcon } from "assets";
import { RouterLink } from "components";
import { useToogle } from "hooks";
import { ROUTE } from "router";
import { useAppDispatch, userSignOut } from "store";
import { DropDown, DropDownItem, InnerSignIn, Name, ProfileIcon, StyledProfile } from "./styles";

interface IProps {
  name: string;
  isAuth: boolean;
  email: string;
}

export const Profile = ({ name, email, isAuth }: IProps) => {
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
      <ProfileIcon>{name ? `${name[0]}${profileNameWords[1][0]}` : <UserIcon />}</ProfileIcon>
      {isAuth ? (
        <Name onClick={handleName}>
          {name || email} <ArrowDownIcon />
        </Name>
      ) : (
        <RouterLink to={ROUTE.HOME + ROUTE.LOGIN}>
          <InnerSignIn>
            Sign in <ArrowRightIcon />
          </InnerSignIn>
        </RouterLink>
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
