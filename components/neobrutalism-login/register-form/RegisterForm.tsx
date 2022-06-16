import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputText from "../input-field/InputField";

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <InputText
        name="username"
        icon={faUser}
        placeholder="Enter your username"
      />
      <InputText name="email" icon={faAt} placeholder="Enter your email" />
      <InputText
        name="password"
        icon={faLock}
        placeholder="Enter your password"
        type="password"
      />
      <InputText
        name="re_password"
        icon={faLock}
        placeholder="Verify your password"
        type="password"
      />
      <div className="flex flex-col mx-auto gap-4 my-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checked:accent-neobrutalismGreen shadow-checkbox checked:ring-1 checked:ring-black"
            id="termsCheckbox"
          />
          <span className="text-xs">
            {"I agree with "}
            <a className="cursor-pointer text-neobrutalismDarkGreen font-bold">
              {"Terms and Conditions"}
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checked:accent-neobrutalismGreen shadow-checkbox checked:ring-1 checked:ring-black"
            id="termsCheckbox"
          />
          <span className="text-xs">
            {"I want to receive news and promotions"}
          </span>
        </div>
      </div>
      <button className="bg-neobrutalismGreen w-4/5 self-center py-2 border-4 shadow-neobrutalism border-black text-3xl font-bold hover:text-white">
        REGISTER
      </button>
      <span className="text-sm self-center">
        {"Already have an account? "}
        <a className="cursor-pointer text-red-500 font-bold">{"Login"}</a>
      </span>
    </div>
  );
};

export default RegisterForm;
