import React from "react";
import { Link } from "react-router-dom";
import TitleSub from "../components/title-subtitle";
import InputEmail from "../components/input-email";
import PassLogin from "../components/input-password";
import BlueBtn from "../components/btn-blue";
import Redirect from "../components/link-redirection";
import PassConfirm from "../components/confirm-password";
import UserName from "../components/user-name";
import setaVector from "../images/vetor-seta.svg"

const RegisterPage = () => {
  return (
    <section className="flex flex-col w-full h-full bg-[#EFEFEF] justify-center items-center">
      <Link to="/">
        <div className="flex w-[80%] h-[70px]">
            <img className="w-[30px] h-auto" alt="" src={setaVector} />
        </div>
      </Link>
      <TitleSub title="Register" subtitle="Create an account and be part of our community!" />
      <UserName/>
      <InputEmail />
      <PassLogin />
      <PassConfirm/>
      <BlueBtn name="Sign up" />
      <Redirect frase="Already have an account?" />
      <Link to="/login">
        <span className="text-[#EF3851] text-[14px] font-bold">Sign in</span>
      </Link>
    </section>
  );
};

export default RegisterPage;
