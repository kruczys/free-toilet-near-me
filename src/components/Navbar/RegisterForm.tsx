import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import PasswordChecklist from "react-password-checklist";
import { z } from "zod";
import userSchema from "../../schemas/UserSchema";
import FormInput from "../common/FormInput";

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
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitAction = (data: FieldValues) => {
    console.log("form submitted", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitAction)}>
      <FormInput
        formRegister={register("username")}
        id="registerUsername"
        type="text"
        errorMessage={errors.username && errors.username.message}
      >
        <BsFillPersonFill></BsFillPersonFill>
        Username
      </FormInput>
      <FormInput
        formRegister={register("email")}
        id="registerEmail"
        type="email"
        errorMessage={errors.email && errors.email.message}
      >
        <AiOutlineMail></AiOutlineMail>
        E-mail
      </FormInput>
      <FormInput
        formRegister={register("password")}
        id="registerPassword"
        type="password"
        onChange={(data) => setPassword(data)}
      >
        <BsFillKeyFill></BsFillKeyFill>
        Password
      </FormInput>
      <FormInput
        formRegister={register("confirmPassword")}
        id="registerConfirmPassword"
        type="password"
        onChange={(data) => setConfirmPassword(data)}
      >
        <BsFillKeyFill></BsFillKeyFill>
        Confirm password
      </FormInput>
      <div className="mb-6 text-xs">
        <PasswordChecklist
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
          iconComponents={{
            ValidIcon: (
              <div className="mr-1">
                <AiOutlineCheck />
              </div>
            ),
            InvalidIcon: (
              <div className="mr-1">
                <RxCross1 />
              </div>
            ),
          }}
        />
      </div>
      <div className="flex justify-around">
        <button
          type="button"
          className="bg-orange-900 px-2 py-1 text-white rounded"
          onClick={() =>
            document.querySelector<HTMLDialogElement>(".modal")?.close()
          }
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-orange-900 px-2 py-1 text-white rounded"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
