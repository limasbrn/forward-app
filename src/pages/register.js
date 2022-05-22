import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../components/input-email";
import PassLogin from "../components/input-password";
import BlueBtn from "../components/btn-blue";
import UserName from "../components/user-name";
import setaVector from "../images/vetor-seta.svg";
import logo from "../images/logo-completa-rosa.svg";
import { userValidation } from "../validation/user-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [httpErrors, setHttpErrors] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userValidation) });

  const createUser = async (formData) => {
    const isValid = await userValidation.isValid(formData);

    if (isValid) {
      try {
        const response = await fetch("http://localhost:4000/user/cadaster", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.ok === true)
          setHttpErrors("Well done you created your account!");
        if (data.ok === false) setHttpErrors("This user already exist!");
      } catch (errors) {}
    }
  };

  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex w-[80%] h-[70px] justify-start items-center">
        <Link to="/">
          <img className="w-[30px] h-auto" alt="" src={setaVector} />
        </Link>
      </div>

      <div className="flex flex-col w-[80%] h-[100px] justify-center items-center">
        <h1 className="flex text-center text-[#343E48] text-[25px] font-bold">
          Register
        </h1>
        <span className="flex text-center font-medium text-[#868686] text-[14px]">
          Create an account and be part of our community!
        </span>
        <h2 id="mensagem-server" className="font-semibold text-[#343E48]">
          {httpErrors}
        </h2>
      </div>

      <form onSubmit={handleSubmit(createUser)}>
        <h2 className="font-semibold text-[#343E48] mt-[20px]">Name</h2>

        <UserName {...register("name")} />
        <p className="font-semibold text-[#EF3851]">{errors.name?.message}</p>

        <h2 className="font-semibold text-[#343E48] mt-[20px]">E-mail</h2>
        <InputEmail {...register("email")}/>
        <p className="font-semibold text-[#EF3851]">{errors.email?.message}</p>

        <h2 className="font-semibold text-[#343E48] mt-[20px]">Password</h2>
        <PassLogin {...register("password")} />
        <p className="font-semibold text-[#EF3851]">
          {errors.password?.message}
        </p>

        <div className="flex w-full h-[100px] justify-center items-center mt-[20px]mb-[20px]">
          <BlueBtn name="Sign up" />
        </div>
      </form>

      <div className="flex flex-row h-[50px] w-[80%] justify-center">
        <span className=" font-semibold text-[16px] text-[#868686]">
          Already have an account?
        </span>
        <Link to="/login">
          <span className="text-[#EF3851] text-[16px] font-semibold">
          &nbsp; Sign in
          </span>
        </Link>
      </div>

      <div className="flex w-[80%] h-[45px] items-end justify-center">
        <span className="text-[#EF3851] text-[14px] font-semibold">
          Forward &copy; copyright 2022
        </span>
      </div>
    </section>
  );
};

export default RegisterPage;
