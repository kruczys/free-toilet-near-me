import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import { z } from "zod";
import userSchema from "../../schemas/UserSchema";
import FormButtons from "../Form/FormButtons";
import FormInput from "../Form/FormInput";
import PasswordCheckList from "../Form/PasswordCheckList";

const schema = userSchema.refine(
  ({ password, confirmPassword }) => password === confirmPassword,
  {
    message: "passwords don't match",
    path: ["confirmPassword"],
  },
);

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors: validationErrors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitAction = (data: FormData) => {
    console.log("form submitted", data);

    reset();
    setPassword("");
    setConfirmPassword("");
    // TODO: close modal and suggest login
  };

  const submitFailAction = () => {
    console.log("form error");
  };

  return (
    <form onSubmit={handleSubmit(submitAction, submitFailAction)}>
      <FormInput
        formRegister={register("username")}
        id="registerUsername"
        type="text"
        errorMessage={validationErrors?.username?.message}
      >
        <BsFillPersonFill />
        Username
      </FormInput>
      <FormInput
        formRegister={register("email")}
        id="registerEmail"
        type="email"
        errorMessage={validationErrors?.email?.message}
      >
        <AiOutlineMail />
        E-mail
      </FormInput>
      <FormInput
        formRegister={register("password")}
        id="registerPassword"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      >
        <BsFillKeyFill />
        Password
      </FormInput>
      <FormInput
        formRegister={register("confirmPassword")}
        id="registerConfirmPassword"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      >
        <BsFillKeyFill />
        Confirm password
      </FormInput>
      <PasswordCheckList
        rules={[
          "minLength",
          "lowercase",
          "capital",
          "number",
          "specialChar",
          "match",
        ]}
        minLength={8}
        value={password}
        valueAgain={confirmPassword}
      ></PasswordCheckList>
      <FormButtons>Register</FormButtons>
    </form>
  );
};

export default RegisterForm;
