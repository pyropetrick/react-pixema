import { Button, Label, Switch, Title } from "components";
import { ISettingsData } from "pages";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { Input, StyledFormSettings, GroupButton, FormCard, DescSpan } from "./styles";

export const SettingsPage = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };
  const inputChecked = theme === "dark" ? true : false;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISettingsData>({
    mode: "onBlur",
    defaultValues: { name: "Pavel", email: "pavel.chernenko97@gmail.com" },
  });
  const onSubmit: SubmitHandler<ISettingsData> = ({
    name,
    email,
    password,
    passwordConfirm,
    passwordNew,
  }) => {
    if (passwordNew === passwordConfirm) {
      console.log(name, email, passwordNew);
    }
  };
  const onReset = () => reset();
  return (
    <StyledFormSettings onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h2" text="Profile" />
      <FormCard>
        <Label text="Name">
          <Input placeholder="Your name" type="text" {...register("name", { required: true })} />
        </Label>
        <Label text="Email">
          <Input placeholder="Your email" type="email" {...register("email", { required: true })} />
        </Label>
      </FormCard>
      <Title variant="h2" text="Password" />
      <FormCard>
        <Label text="Password">
          <Input
            placeholder="Your password"
            type="password"
            {...register("password", { required: true })}
          />
        </Label>
        <Label text="New Password">
          <Input
            placeholder="New password"
            type="password"
            {...register("passwordNew", { required: true })}
          />
        </Label>
        <Label text="Confirm Password" style={{ gridColumnStart: "2", gridColumnEnd: "2" }}>
          <Input
            placeholder="Confirm password"
            type="password"
            {...register("passwordConfirm", { required: true })}
          />
        </Label>
      </FormCard>
      <Title variant="h2" text="Color mode" />
      <FormCard>
        <Label text="Dark">
          <DescSpan>Use dark theme</DescSpan>
        </Label>
        <Switch onChange={handleTheme} checked={inputChecked} />
      </FormCard>
      <GroupButton>
        <Button type="button" text="Cancel" variant="secondary" onClick={onReset} />
        <Button type="submit" text="Save" variant="primary" />
      </GroupButton>
    </StyledFormSettings>
  );
};
