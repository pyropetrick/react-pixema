import { Button, Label, Title } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPassword, useAppDispatch } from "store";
import { Form, Input } from "ui";

interface IResetPasswordForm {
  email: string;
}

export const PasswordResetPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordForm>();
  const onSubmit: SubmitHandler<IResetPasswordForm> = ({ email }) => dispatch(resetPassword(email));

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
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
