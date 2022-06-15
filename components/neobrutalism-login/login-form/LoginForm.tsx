import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputText from "../input-text/InputText";

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
      />
      <InputText
        name="re_password"
        icon={faLock}
        placeholder="Verify your password"
      />
    </div>
  );
};

export default LoginForm;
