import { Button, Label, Switch, Title } from "components";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { Input } from "ui";
import { GroupButton, FormCard, DescSpan, FormSettings } from "./styles";
import { updateUserProfile } from "../../store/features/userSlice";
interface ISettingsData {
  name: string;
  email: string;
  passwordConfirm: string;
  passwordNew: string;
}

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
  });
  const onSubmit: SubmitHandler<ISettingsData> = ({
    name,
    email,
    passwordConfirm,
    passwordNew,
  }) => {
    if (passwordNew === passwordConfirm) {
      dispatch(updateUserProfile({ name, email, password: passwordNew, theme })).then((response) =>
        reset(),
      );
    }
  };
  const onReset = () => reset();
  return (
    <FormSettings onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h2" text="Profile" />
      <FormCard>
        <Label text="Name">
          <Input
            placeholder="Your name"
            type="text"
            {...register("name", { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ })}
          />
        </Label>
        <Label text="Email">
          <Input placeholder="Your email" type="email" {...register("email", { required: true })} />
        </Label>
      </FormCard>
      <Title variant="h2" text="Password" />
      <FormCard>
        {/* <Label text="Password">
          <Input
            placeholder="Your password"
            type="password"
            $error={errors.password && true}
            {...register("password", { required: true })}
          />
        </Label> */}
        <Label text="New Password">
          <Input
            placeholder="New password"
            type="password"
            $error={errors.passwordNew && true}
            {...register("passwordNew", { required: true })}
          />
        </Label>
        <Label text="Confirm Password" style={{ gridColumnStart: "2", gridColumnEnd: "2" }}>
          <Input
            placeholder="Confirm password"
            type="password"
            $error={errors.passwordConfirm && true}
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
    </FormSettings>
  );
};
