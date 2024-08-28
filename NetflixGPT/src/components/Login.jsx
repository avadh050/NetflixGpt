import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidationData from "../utils/validation";

const Login = () => {
  const [isSingIn, setIsSingIn] = useState(true);
  const [errorMsg, seterrorMsg] = useState("");

  const toggleSingup = () => {
    setIsSingIn(!isSingIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    const msg = checkValidationData(
      email.current.value,
      password.current.value
    );
    seterrorMsg(msg);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="BG-IMG"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12  p-10  bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-md "
      >
        <h1 className="text-2xl font-bold py-4">
          {isSingIn ? "Sing In" : "Sind Up"}
        </h1>

        {!isSingIn && (
          <input
            className="p-2 my-4 w-full bg-slate-800 rounded border-gray-400 placeholder:text-gray-300"
            type="text"
            required
            placeholder="Enter your Name"
          />
        )}

        <input
          ref={email}
          className="p-2 my-4 w-full bg-slate-800 rounded border-gray-400 placeholder:text-gray-300"
          type="text"
          placeholder="Enter your email"
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-4 w-full  bg-slate-800 rounded border-gray-400"
          placeholder="Enter your Password"
        />
        <p className="p-2 font-semibold text-red-500 ">{errorMsg}</p>
        <button
          onClick={handleSubmitForm}
          className="p-2 my-4 bg-red-600 w-full rounded"
          type="submit"
        >
          {isSingIn ? "Sing In" : "Sind Up"}
        </button>
        {isSingIn && (
          <p>
            New to Netflix ?
            <span
              onClick={toggleSingup}
              className="cursor-pointer font-semibold px-1 hover:underline"
            >
              Sing Up Now.
            </span>
          </p>
        )}
        {!isSingIn && (
          <p>
            Already have an account ?
            <span
              onClick={toggleSingup}
              className="cursor-pointer font-semibold px-1 hover:underline"
            >
              Sing In Now.
            </span>
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
