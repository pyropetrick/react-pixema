import { Button, Label, MenuLink, Title } from "components";
import { Path } from "config";
import { Input, InputGroup, StyledForm, TextLink } from "../styles";

export const RegistrationForm = () => {
  return (
    <StyledForm>
      <Title variant="h2" text="Sign Up" />
      <InputGroup>
        <Label text="Name">
          <Input placeholder="Your name" type="text" />
        </Label>
        <Label text="Last Name">
          <Input placeholder="Your lastname" type="text" />
        </Label>
        <Label text="Email">
          <Input placeholder="Your email" type="email" />
        </Label>
        <Label text="Password">
          <Input placeholder="Your password" type="password" />
        </Label>
        <Label text="Confirm Password">
          <Input placeholder="Confirm password" type="password" />
        </Label>
      </InputGroup>
      <Button
        text="Sign up"
        variant="primary"
        type="submit"
        onClick={() => console.log("sign in")}
      />
    </StyledForm>
  );
};
