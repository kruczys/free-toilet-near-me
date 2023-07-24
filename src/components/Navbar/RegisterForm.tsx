import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import PasswordChecklist from "react-password-checklist";
import { z } from "zod";
import userSchema from "../../schemas/UserSchema";

type FormData = z.infer<typeof userSchema>;

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(userSchema) });

  const submitAction = (data: FieldValues) => {
    console.log("form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(submitAction)}>
      <div className="flex flex-col mb-4">
        <label htmlFor="userNameInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <BsFillPersonFill></BsFillPersonFill>
            Username
          </div>
        </label>
        <input
          {...register("username")}
          type="text"
          id="userNameInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="emailInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <AiOutlineMail></AiOutlineMail>
            E-Mail
          </div>
        </label>
        <input
          {...register("email")}
          type="email"
          id="emailInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="passwordInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <BsFillKeyFill></BsFillKeyFill>
            Password
          </div>
        </label>
        <input
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="passwordInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="confirmPasswordInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <BsFillKeyFill></BsFillKeyFill>
            Confirm password
          </div>
        </label>
        <input
          {...register("confirmPassword")}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirmPasswordInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
        />
      </div>
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
