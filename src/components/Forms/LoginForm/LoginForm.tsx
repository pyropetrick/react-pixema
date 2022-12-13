import { Button, Label, Title } from "components";
import { Input, InputGroup, StyledForm } from "../styles";

export const LoginForm = () => {
  return (
    <StyledForm>
      <Title variant="h2" text="Sign In" />
      <InputGroup>
        <Label text="Email">
          <Input />
        </Label>
        <Label text="Password">
          <Input />
        </Label>
      </InputGroup>
      <Button
        text="Sign in"
        variant="primary"
        type="submit"
        onClick={() => console.log("sign in")}
      />
    </StyledForm>
  );
};
