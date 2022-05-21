import React from "react";
import { Link } from "react-router-dom";
import TitleSub from "../components/title-subtitle";
import InputEmail from "../components/input-email";
import PassLogin from "../components/input-password";
import BlueBtn from "../components/btn-blue";
import Redirect from "../components/link-redirection";
import PassConfirm from "../components/confirm-password";
import UserName from "../components/user-name";
import setaVector from "../images/vetor-seta.svg";
import { userValidation } from "../validation/user-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const createUser = async (event) => {
    event.preventDefault();

    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
    
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userValidation) });

  return (
    <section className="flex flex-col w-full h-full bg-[#EFEFEF] justify-center items-center">
      <Link to="/">
        <div className="flex w-[80%] h-[70px]">
          <img className="w-[30px] h-auto" alt="" src={setaVector} />
        </div>
      </Link>
      <TitleSub
        title="Register"
        subtitle="Create an account and be part of our community!"
      />
      <form onSubmit={handleSubmit(createUser)}>

        <h2 className="font-semibold text-[#343E48]">Name</h2>
        <UserName {...register("name")} />
        <p className="font-semibold text-[#EF3851]">{errors.name?.message}</p>

        <h2 className="font-semibold text-[#343E48]">E-mail</h2>
        <InputEmail {...register("email")} />
        <p className="font-semibold text-[#EF3851]">{errors.email?.message}</p>

        <h2 className="font-semibold text-[#343E48]">Password</h2>
        <PassLogin {...register("password")} />
        <p className="font-semibold text-[#EF3851]">
          {errors.password?.message}
        </p>

        <PassConfirm />
        <BlueBtn name="Sign up" />
      </form>
      <Redirect frase="Already have an account?" />
      <Link to="/login">
        <span className="text-[#EF3851] text-[14px] font-bold">Sign in</span>
      </Link>
    </section>
  );
};

export default RegisterPage;
