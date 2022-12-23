import { Button, Label, Title } from "components";
import { useForm } from "react-hook-form";
import { Form, Input, InputGroup } from "ui";

interface IResetPasswordForm {
  email: string;
}

export const PasswordResetPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IResetPasswordForm>();
  return (
    <Form>
      <Title variant="h2" text="Reset Password" />
      <Label text="Email">
        <Input
          placeholder="Your email"
          type="email"
          $error={errors.email && true}
          {...register("email", { required: true })}
        />
      </Label>
      <Button variant="primary" text="Reset" />
    </Form>
  );
};