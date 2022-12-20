import { Button, Label, Title } from "components";
import { useForm } from "react-hook-form";
import { Form, Input, InputGroup } from "ui";

interface IPasswordForm {
  password: string;
  passwordConfirm: string;
}

export const PasswordNewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPasswordForm>();
  return (
    <Form>
      <Title variant="h2" text="New password" />
      <InputGroup>
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
            placeholder="Your password"
            type="password"
            $error={errors.password && true}
            {...register("passwordConfirm", { required: true })}
          />
        </Label>
      </InputGroup>
      <Button variant="primary" text="Set password" />
    </Form>
  );
};
