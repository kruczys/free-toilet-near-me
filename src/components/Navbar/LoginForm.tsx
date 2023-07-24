import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";
import { z } from "zod";
import userSchema from "../../schemas/UserSchema";
import FormInput from "../common/FormInput";

const schema = userSchema.pick({ username: true, password: true });

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const { register, reset, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitAction = (data: FieldValues) => {
    console.log("form submitted", data);
    reset();
  };

  const submitFailAction = () => {
    console.log("form error");
  };

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
      >
        <BsFillKeyFill></BsFillKeyFill>
        Password
      </FormInput>
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
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
