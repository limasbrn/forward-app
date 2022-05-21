import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-completa-rosa.svg";
import ilustraMobile from "../images/ilustração-mobile.svg";
import PinkBtn from "../components/btn-pink";
import BlueBtn from "../components/btn-blue";
import TitleSub from "../components/title-subtitle"


const InicialPage = () => {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="flex flex-col w-full items-center">
        <div className="w-[80%] h-[40px] bg-green-100 mb-[10px]">
          <img className="w-[170px] h-auto" alt="" src={logo} />
        </div>
        <div className="flex w-full h-[300px] bg-green-100 mb-[15px] justify-center items-center">
          <img className="flex w-[270px] h-auto" alt="" src={ilustraMobile} />
        </div>
        <TitleSub title="Hello!" subtitle="Forward is a place were good practices of consume are encouraged. Login to go forward!"/>
        <div className="flex w-full h-auto bg-red-200 justify-center items-center mt-[15px]">
          <Link to="/login">
            <BlueBtn name="Login" />
          </Link>
        </div>
        <div className="flex w-full h-auto bg-red-300 mb-[10px] justify-center items-center">
          <Link to="/register">
            <PinkBtn name="Register" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InicialPage;
