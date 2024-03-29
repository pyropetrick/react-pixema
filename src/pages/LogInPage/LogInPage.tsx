import { Button, Label, RouterLink, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { signIn, useAppDispatch } from "store";
import { Form, Input, InputGroup } from "ui";
import { Text } from "./styles";

interface ILoginData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ILoginData> = (dataSignIn) => {
    dispatch(signIn(dataSignIn))
      .unwrap()
      .then((res) => reset());
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <Title variant="h2" text="Sign In" />
      <InputGroup>
        <Label text="Email">
          <Input
            placeholder="Enter your Email"
            type="email"
            $error={errors.email && true}
            {...register("email", { required: true })}
          />
        </Label>
        <Label text="Password">
          <Input
            placeholder="Enter your password"
            type="password"
            $error={errors.password && true}
            {...register("password", { required: true })}
          />
          <RouterLink to={`${ROUTE.HOME + ROUTE.RESET_PASSWORD}`}>Forgot Password?</RouterLink>
        </Label>
      </InputGroup>
      <Button text="Sign in" variant="primary" type="submit" />
      <Text>
        Don't have an account?{" "}
        <RouterLink to={`${ROUTE.HOME + ROUTE.REGISTRATION}`}>Sign up</RouterLink>
      </Text>
    </Form>
  );
};
