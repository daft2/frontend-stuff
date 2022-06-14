import React from "react";
import InputText from "../input-text/InputText";
import RoundedIconButton from "../rounded-icon-button/RoundedIconButton";
import TextTitle from "../text-title/TextTitle";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen xl:w-1/3 xl:h-2/5 p-20 bg-slate-100 bg-opacity-25 backdrop-filter backdrop-blur-xs rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-1">
        <TextTitle text={"Your Logo"} color="draxBtnOrange" />
        <TextTitle text={"Login"} />
      </div>
      <div className="flex flex-col">
        <InputText
          className="mb-6"
          label="Email"
          placeholder="someone@example.com"
        />
        <InputText label="Password" placeholder="Password" password />
        <span className="text-xs my-2">Forgot password?</span>
      </div>
      <button className="bg-draxBtnOrange inline-block text-white py-1 my-4 rounded">
        Sign In
      </button>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-center">or continue with</span>
        <div className="flex justify-between">
          <RoundedIconButton icon="/icons/google.svg" color="white" />
          <RoundedIconButton icon="/icons/github.svg" color="white" />
          <RoundedIconButton icon="/icons/facebook.svg" color="white" />
        </div>
      </div>
      <span className="text-xs text-center">
        Don’t have an account yet?{" "}
        <span className="font-bold">Register for free</span>
      </span>
    </div>
  );
};

export default LoginForm;
