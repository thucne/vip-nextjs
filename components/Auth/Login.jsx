import MediumInput from "@components/Input/MediumInput";
import React, { useRef, useState } from "react";

/**
 * @author
 * @function Login
 **/

var inputClass =
  "w-[300px] border-[1px] border-gray-600 p-2 rounded-full outline-none pl-5 bg-transparent";

const Login = ({ setAuthPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const checkRequiredInput = (field) => {
    switch (field) {
      case "email":
        return email.length ? "" : "* Email is required";
      case "password":
        return password.length ? "" : "* Password is required";
    }
  };

  const checkCanSubmit = () => (email && password ? true : false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-cyan-600 font-bold mb-20">Welcome Back</h1>
      <input
        type="text"
        className={inputClass}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="h-[18px] text-[12px] text-red-700 text-left mb-3">
        {checkRequiredInput("email")}
      </p>
      <input
        type="text"
        className={inputClass}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="h-[18px] text-[12px] text-red-700 text-left mb-3">
        {checkRequiredInput("password")}
      </p>
      <button
        className="py-2 px-5 bg-[#524A4E] hover:drop-shadow-md text-white rounded-full mt-5"
        disabled={!checkCanSubmit()}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
export default Login;
