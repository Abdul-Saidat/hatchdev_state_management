import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";

const Login = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) {
      // Perform login logic here
      console.log("Logging in with:", { name, email });
      dispatch(setUser({ name, email }));
    }
  };

  return (
    <div className=" px-5 py-14 w-full max-w-3xl mx-auto text-center">
      <header className=" mx-auto w-full max-w-3xl px-5 pt-5">
        <span className="font-semibold">Welcome back!</span>
        <p className="">Sign in to your account to continue</p>
      </header>

      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mx-auto mt-8 max-w-160 rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-[0_20px_50px_-20px_rgba(15,118,110,0.28)] sm:p-6"
        >
          <div>
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-500 focus-visibility:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-500 focus-visibility:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-teal-700 px-5 py-3 font-bold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
