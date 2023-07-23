import { useState } from "react";
import LoginForm from "./LoginForm";

interface Props {
  onCloseForm: () => void; //FIXME: props drilling
}

const UserForms = ({ onCloseForm }: Props) => {
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");

  return (
    <div>
      {activeForm === "login" ? (
        <LoginForm onCloseForm={onCloseForm}></LoginForm>
      ) : (
        "register form"
      )}
      <div className="mt-2 text-xs font-extralight text-slate-500">
        {activeForm === "login" ? (
          <span>
            Don't have an account yet?{" "}
            <button
              onClick={() => setActiveForm("register")}
              className="hover:font-normal"
            >
              Click here to sign up.
            </button>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <button
              onClick={() => setActiveForm("login")}
              className="hover:font-normal"
            >
              Click here to log in.
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default UserForms;
