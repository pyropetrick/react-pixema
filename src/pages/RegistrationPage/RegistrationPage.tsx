import { Button, Label, RouterLink, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { getUser, signUp, useAppDispatch, useAppSelector } from "store";
import { Form, Input, InputGroup } from "ui";
import { Text } from "./styles";

interface IRegistrationData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const { isLoading } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegistrationData>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<IRegistrationData> = ({
    name,
    email,
    password,
    passwordConfirm,
  }) => {
    if (password === passwordConfirm) {
      dispatch(signUp({ name, email, password })).then((response) => {
        reset();
        return navigate(ROUTE.HOME);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title variant="h2" text="Sign Up" />
      <InputGroup>
        <Label text="Name">
          <Input
            placeholder="Your name"
            type="text"
            $error={errors.name && true}
            {...register("name", { required: true, pattern: /[A-Za-z]*?s[A-Za-z]/ })}
          />
        </Label>
        <Label text="Email">
          <Input
            placeholder="Your email"
            type="email"
            $error={errors.email && true}
            {...register("email", { required: true })}
          />
        </Label>
        <Label text="Password">
          <Input
            placeholder="Your password"
            type="password"
            $error={errors.password && true}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum characters 6" },
            })}
          />
        </Label>
        <Label text="Confirm Password">
          <Input
            placeholder="Confirm password"
            type="password"
            $error={errors.passwordConfirm && true}
            {...register("passwordConfirm", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum characters 6" },
            })}
          />
        </Label>
      </InputGroup>
      <Button text="Sign up" variant="primary" type="submit" />
      <Text>
        Already have an account? <RouterLink to={`/${ROUTE.LOGIN}`}>Sign In</RouterLink>
      </Text>
    </Form>
  );
};
