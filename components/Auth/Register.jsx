import MediumInput from "@components/Input/MediumInput";
import React, { useEffect, useRef, useState } from "react";

/**
 * @author
 * @function Register
 **/

var inputClass =
  "w-[300px] border-[1px] border-gray-600 p-2 rounded-full outline-none pl-5 bg-transparent";


const Register = ({ setAuthPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const checkRequiredInput = (field) => {
    switch (field) {
      case "name":
        return name.length ? "" : "* Name is required";
      case "email":
        return email.length ? "" : "* Email is required";
      case "username":
        return username.length ? "" : "* Username is required";
      case "password":
        return password.length ? "" : "* Password is required";
    }
  };

  const checkCanSubmit =()=> (name && email && username && password) ? true : false;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-cyan-600 font-bold mb-20">
        Create an account
      </h1>
      <input
        type="text"
        className={inputClass}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <p className="h-[18px] text-[12px] text-red-700 text-left mb-3">
        {checkRequiredInput("name")}
      </p>
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
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="h-[18px] text-[12px] text-red-700 text-left mb-3">
        {checkRequiredInput("username")}
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
      <p className="text-sm text-gray-400">
        Already have an account
        <span
          className="ml-5 cursor-pointer underline text-gray-800 "
          onClick={() => setAuthPage(0)}
        >
          Login
        </span>
      </p>
      <button
        className="py-2 px-5 bg-[#524A4E] hover:drop-shadow-md text-white rounded-full mt-5 disable"
        disabled={!checkCanSubmit()}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Register;
