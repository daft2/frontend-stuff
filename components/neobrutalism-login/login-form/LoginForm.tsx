import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputText from "../input-field/InputField";

const LoginForm = () => {
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
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          className="checked:accent-neobrutalismGreen shadow-checkbox checked:ring-1 checked:ring-black"
          id="termsCheckbox"
        />
        <span className="text-xs">
          {"I agree with "}
          <span className="text-neobrutalismDarkGreen font-bold">
            {"Terms and Conditions"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
