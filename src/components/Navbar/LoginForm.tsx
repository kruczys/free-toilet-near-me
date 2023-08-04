import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import { z } from "zod";
import userSchema from "../../schemas/UserSchema";
import FormButtons from "../Form/FormButtons";
import FormInput from "../Form/FormInput";

const schema = userSchema.pick({ username: true, password: true });

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors: validationErrors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitAction = (data: FieldValues) => {
    console.log("form submitted", data);
    reset();
    // TODO: close modal
  };

  const submitFailAction = () => {
    console.log("form error");
  };

  const loginFailMessage =
    (validationErrors.username || validationErrors.password) &&
    "Either login or password is incorrect.";

  return (
    <form onSubmit={handleSubmit(submitAction, submitFailAction)}>
      <FormInput
        formRegister={register("username")}
        id="loginUsername"
        type="text"
      >
        <BsFillPersonFill></BsFillPersonFill>
        Login
      </FormInput>
      <FormInput
        formRegister={register("password")}
        id="loginPassword"
        type="password"
        errorMessage={loginFailMessage}
      >
        <BsFillKeyFill></BsFillKeyFill>
        Password
      </FormInput>
      <FormButtons>Login</FormButtons>
    </form>
  );
};

export default LoginForm;
