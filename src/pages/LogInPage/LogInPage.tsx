import { Button, Label, RouterLink, Title } from "components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { setUser, useAppDispatch } from "store";
import { Form, Input, InputGroup } from "ui";
import { Text } from "./styles";

interface ILoginData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<ILoginData> = async ({ email, password }) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      reset();
      navigate(ROUTE.HOME);
    } catch (e) {
      alert("Email or password wrong");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        </Label>
      </InputGroup>
      <Button text="Sign in" variant="primary" type="submit" />
      <Text>
        Don't have an account? <RouterLink to={`/${ROUTE.REGISTRATION}`}>Sign up</RouterLink>
      </Text>
    </Form>
  );
};
