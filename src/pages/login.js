import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputEmail from "../components/input-email";
import PassLogin from "../components/input-password";
import BlueBtn from "../components/btn-blue";
import setaVector from "../images/vetor-seta.svg";
import { loginValidation } from "../validation/login-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [loginErrors, setloginErrors] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidation) });

  const loginHandler = async (formData) => {
    const isValid = await loginValidation.isValid(formData);

    console.log(isValid);
    if (isValid) {
      try {
        const response = await fetch("http://localhost:4000/login", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(formData),
        });

        const dataLogin = await response.json();

        if (dataLogin.ok === false) setloginErrors("User not founded!");
        if (dataLogin.ok === true) setloginErrors("Welcome back");

        console.log(dataLogin);
      } catch (errors) {
        console.log(errors);
      }
    }
  };

  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      
      <div className="flex w-[80%] h-[70px] justify-start items-center">
        <Link to="/">
          <img className="w-[30px] h-auto" alt="" src={setaVector} />
        </Link>
      </div>

      <div className=" flex flex-col md:w-[400px] md:h-[500px] md:border-[1px] md:border-[#DADADA] rounded-[5px] justify-center align-center items-center">

        <div className="flex flex-col w-[80%] h-[100px]  justify-center items-center">
          <h1 className="flex text-center text-[#343E48] text-[25px] font-bold">
            Login
          </h1>
          <span className="flex text-center font-medium text-[#868686] text-[14px]">
            Nice to see you again!
          </span>
          <h2 id="mensagem-server" className="font-semibold text-[#343E48]">
            {loginErrors}
          </h2>
        </div>

        <form onSubmit={handleSubmit(loginHandler)}>
          <h2 className="font-semibold text-[#343E48] mt-[20px]">Name</h2>
          <InputEmail {...register("name")} />
          <p className="font-semibold text-[#6A1BCD]">{errors.name?.message}</p>

          <h2 className="font-semibold text-[#343E48] mt-[20px]">Password</h2>
          <PassLogin {...register("password")} />
          <p className="font-semibold text-[#6A1BCD]">
            {errors.password?.message}
          </p>

          <div className="flex w-full h-[100px] justify-center items-center mt-[20px]mb-[20px]">
            <BlueBtn name="Login" />
          </div>
        </form>

        <div className="flex flex-row h-[50px] w-[auto] justify-center">
          <span className=" font-semibold text-[16px] text-[#868686]">
            Dont't have an account?
          </span>
          <Link to="/register">
            <span className="text-[#6A1BCD] text-[16px] font-semibold">
              &nbsp; Sign up
            </span>
          </Link>
        </div>

      </div>

      <div className="flex w-[80%] h-[100px] items-end justify-center align-baseline">
        <span className="text-[#6A1BCD] text-[14px] font-semibold">
          Forward &copy; copyright 2022
        </span>
      </div>

    </section>
  );
};

export default LoginPage;
