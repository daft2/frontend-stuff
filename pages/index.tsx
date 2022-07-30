import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 text-white font-sans p-12">
      <div className="flex flex-col w-fit">
        <Link href="/login-page/neobrutalism-login-page/login">
          <span className="hover:text-teal-200 cursor-pointer">
            Neobrutalism Login
          </span>
        </Link>
        <Link href="/login-page/drax-login-page">
          <span className="hover:text-teal-200 cursor-pointer">Drax Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
