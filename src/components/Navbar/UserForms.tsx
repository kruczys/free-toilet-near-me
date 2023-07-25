import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

enum FormType {
  Login,
  Register,
}

const FormComponent = {
  [FormType.Login]: <LoginForm />,
  [FormType.Register]: <RegisterForm />,
};

const UserForms = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.Login);

  return (
    <>
      {FormComponent[activeForm]}
      <div className="mt-2 text-xs font-extralight text-slate-500 text-center">
        <span>
          {activeForm === FormType.Login
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <button
            onClick={() =>
              activeForm === FormType.Login
                ? setActiveForm(FormType.Register)
                : setActiveForm(FormType.Login)
            }
            className="hover:font-normal" //FIXME: jumping text
          >
            {activeForm === FormType.Login
              ? "Click here to sign up."
              : "Click here to log in."}
          </button>
        </span>
      </div>
    </>
  );
};

export default UserForms;
