import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import LoginForm from "../../../../components/neobrutalism-login/login-form/LoginForm";

const NeobrutalismLoginPage: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-neobrutalismTheme font-sans flex items-center justify-center">
      <div className="flex flex-col w-80">
        <div className="bg-cover self-center img-fluid mb-12">
          <Image
            src="/images/LoremLogo.png"
            alt="Lorem Logo"
            width="275px"
            height="77px"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default NeobrutalismLoginPage;
