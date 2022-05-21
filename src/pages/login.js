import React from "react";
import { Link } from "react-router-dom";
import TitleSub from "../components/title-subtitle"
import InputEmail from "../components/input-email"
import PassLogin from "../components/input-password"
import BlueBtn from "../components/btn-blue";
import Redirect from "../components/link-redirection"
import setaVector from "../images/vetor-seta.svg"

const LoginPage = () => {
    return (
        <section className="flex flex-col w-full h-full bg-[#EFEFEF] justify-center items-center">
           
            <div className="flex w-[80%] h-[70px] justify-start items-center">
               <Link to="/"><img className="w-[30px] h-auto" alt="" src={setaVector} /></Link>
            </div>
            
            <div className="flex flex-col w-[80%] h-[100px] bg-red-100 justify-center items-center">
                <h1 className="flex text-center text-[#343E48] text-[25px] font-bold">Login</h1>
                 <span  className="flex text-center font-medium text-[#868686] text-[14px]">Nice to see you again!</span>
            </div>
      
          
            <form>
                <h2 className="font-semibold text-[#343E48] mt-[20px]">E-mail</h2>
                <InputEmail/>
                <h2 className="font-semibold text-[#343E48] mt-[20px]">Password</h2>
                <PassLogin/>
            </form>

            <div className="flex w-full h-[100px] justify-center items-center mt-[20px]mb-[20px]"><BlueBtn name="Login"/></div>

            <div className="flex flex-row h-[50px] w-[80%] justify-center">
                <span className=" font-semibold text-[14px] text-[#868686]">Dont't have an account??</span>
                <Link to="/register">
                 <span className="text-[#EF3851] text-[14px] font-semibold">Sign up</span></Link>
            </div>


           <div className="flex w-[80%] h-[120px] bg-green-100 items-end justify-center">
                {/* <img className="w-[140px] h-auto" alt="" src={logo} /> */}
                <span className="text-[#EF3851] text-[14px] font-semibold">
                 Forward &copy; copyright 2022</span>
            </div>
        </section>

     );
    
    };

export default LoginPage;