import { useState } from "react";
import LoginForm from "./LoginForm";

const UserForms = () => {
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");

  return (
    <>
      {activeForm === "login" ? <LoginForm></LoginForm> : "register form"}
      <div className="mt-2 text-xs font-extralight text-slate-500 text-center">
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
    </>
  );
};

export default UserForms;
