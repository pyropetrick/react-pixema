import { Button, Label, RouterLink, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { Form, Input, InputGroup } from "ui";
import { Text } from "./styles";

interface IRegistrationData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegistrationData>();
  const onSubmit: SubmitHandler<IRegistrationData> = ({
    name,
    lastname,
    email,
    password,
    passwordConfirm,
  }) => {
    if (password === passwordConfirm) {
      console.log(name, lastname, password, email);
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
            {...register("name", { required: true })}
          />
        </Label>
        <Label text="Last Name">
          <Input
            placeholder="Your lastname"
            type="text"
            $error={errors.lastname && true}
            {...register("lastname", { required: true })}
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
            {...register("password", { required: true })}
          />
        </Label>
        <Label text="Confirm Password">
          <Input
            placeholder="Confirm password"
            type="password"
            $error={errors.passwordConfirm && true}
            {...register("passwordConfirm", { required: true })}
          />
        </Label>
      </InputGroup>
      <Button text="Sign up" variant="primary" type="submit" />
      <Text>
        Already have an account? <RouterLink to={ROUTE.LOGIN}>Sign In</RouterLink>
      </Text>
    </Form>
  );
};
