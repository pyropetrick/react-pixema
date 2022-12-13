import { Name, ProfileIcon, StyledProfile } from "./styles";

interface IProps {
  name: string;
  lastName: string;
}

export const Profile = ({ name, lastName }: IProps) => {
  return (
    <StyledProfile>
      <ProfileIcon>
        {name[0]}
        {lastName[0]}
      </ProfileIcon>
      <Name>
        {name} {lastName}
      </Name>
    </StyledProfile>
  );
};
