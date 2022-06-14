import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import LoginForm from "../../components/drax-login/login-form/LoginForm";

const DraxLoginPage: NextPage = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-draxThemeOrange relative overflow-hidden">
        <div className="flex flex-col xl:flex-row absolute w-full justify-center items-center gap-36 z-10">
          {/* Login Form */}
          <LoginForm />
          <div className="img-fluid my-12 hidden xl:block w-45percent">
            <Image
              width={"948px"}
              height={"834px"}
              src={"/images/draxBird.png"}
              alt="Drax Bird"
            />
          </div>
        </div>
        <div className="absolute mirror opacity-20 backdrop-filter backdrop-blur-md -top-12 -left-45percent w-full h-full">
          <Image
            layout="responsive"
            width={"948px"}
            height={"834px"}
            src={"/images/draxBird.png"}
            alt="Drax Bird"
          />
        </div>
      </div>
    </div>
  );
};

export default DraxLoginPage;
