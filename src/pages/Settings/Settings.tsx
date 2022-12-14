import { Button, Label, MainLayout, Title } from "components";
import { ChangeEvent } from "react";
import { getTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { Input, StyledFormSettings, GroupButton, FormCard, DescSpan } from "./styles";

export const Settings = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };
  const inputChecked = theme === "dark" ? true : false;
  return (
    <MainLayout>
      <StyledFormSettings>
        <Title variant="h2" text="Profile" />
        <FormCard>
          <Label text="Name">
            <Input placeholder="Your name" type="text" />
          </Label>
          <Label text="Email">
            <Input placeholder="Your email" type="email" />
          </Label>
        </FormCard>
        <Title variant="h2" text="Password" />
        <FormCard>
          <Label text="Password">
            <Input placeholder="Your password" type="password" />
          </Label>
          <Label text="New Password">
            <Input placeholder="New password" type="password" />
          </Label>
          <Label text="Confirm Password" style={{ gridColumnStart: "2", gridColumnEnd: "2" }}>
            <Input placeholder="Confirm password" type="password" />
          </Label>
        </FormCard>
        <Title variant="h2" text="Color mode" />
        <FormCard>
          <Label text="Dark">
            <DescSpan>Use dark theme</DescSpan>
          </Label>
          <Input
            type="checkbox"
            style={{ justifySelf: "end" }}
            onChange={handleTheme}
            checked={inputChecked}
          />
        </FormCard>
        <GroupButton>
          <Button
            style={{ justifySelf: "start" }}
            type="reset"
            text="Cancel"
            variant="secondary"
            onClick={() => console.log("cancel")}
          />
          <Button
            style={{ justifySelf: "end" }}
            type="submit"
            text="Save"
            variant="primary"
            onClick={() => console.log("save")}
          />
        </GroupButton>
      </StyledFormSettings>
    </MainLayout>
  );
};
