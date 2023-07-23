import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        document.querySelector<HTMLDialogElement>(".modal")?.close();
        console.log("form submitted");
      }}
    >
      <div className="mb-4">
        <label htmlFor="loginInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <BsFillPersonFill></BsFillPersonFill>
            Login
          </div>
        </label>
        <input
          type="text"
          name="loginInput"
          id="loginInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="passwordInput" className="block mb-1">
          <div className="flex items-center gap-1">
            <BsFillKeyFill></BsFillKeyFill>
            Password
          </div>
        </label>
        <input
          type="password"
          name="passwordInput"
          id="passwordInput"
          className="border-2 border-black rounded px-2 py-1 focus:rounded focus:outline-none focus:border-orange-900"
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
