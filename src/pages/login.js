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
           <Link to="/">
               <div className="flex w-[80%] h-[70px]">
                    <img className="w-[30px] h-auto" alt="" src={setaVector} />
               </div>
            </Link>
            <TitleSub title="Login" subtitle="Nice to see you again!"/>
            <InputEmail/>
            <PassLogin/>
            <BlueBtn name="Login"/>
            <Redirect frase="Dont't have an account?"/>
            <Link to="/register"><span className="text-[#EF3851] text-[14px] font-bold">Sign up</span></Link>
           
        </section>

     );
    
    };

export default LoginPage;