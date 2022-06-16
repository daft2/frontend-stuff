import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import BoxIconButton from "../box-icon-button/BoxIconButton";
import InputText from "../input-field/InputField";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <InputText
          name="username"
          icon={faUser}
          placeholder="Enter your user or email"
        />
        <InputText
          name="password"
          icon={faLock}
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checked:accent-red-500 shadow-checkbox ring-1 bg-black ring-black"
              id="termsCheckbox"
            />
            <span className="text-xs">Remember me</span>
          </div>
          <Link href="#">
            <span className="text-xs font-bold text-red-500">
              Forgot password?
            </span>
          </Link>
        </div>
      </div>
      {/* divider */}
      <div className="my-6">
        <h1 className="divider">
          <span className="bg-neobrutalismTheme">{"or"}</span>
        </h1>
      </div>
      <div className="flex justify-around mb-8">
        <BoxIconButton src="/icons/google.svg" />
        <BoxIconButton src="/icons/apple.svg" />
        <BoxIconButton src="/icons/facebook.svg" />
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-red-500 text-white w-4/5 self-center py-2 border-4 shadow-neobrutalism border-black text-3xl font-bold hover:text-black">
          LOG IN
        </button>
        <span className="text-sm self-center">
          {"Don't have an account? "}
          <a className="cursor-pointer text-neobrutalismDarkGreen font-bold">
            {"Sign up"}
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
