import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-completa-rosa.svg";
import ilustraMobile from "../images/ilustração-mobile.svg";
import moca1 from "../images/anunciante-lady.svg"
import moca2 from "../images/consumer-lady.svg"
import PinkBtn from "../components/btn-pink";
import BlueBtn from "../components/btn-blue";
import TitleSub from "../components/title-subtitle";

const InicialPage = () => {
  return (
    <section className=" h-screen overflow-hidden">
     

      <div className="relative flex flex-col w-full   h-full items-center justify-center">

      <img className="hidden md:flex absolute md:w-[370px] lg:w-[500px] h-auto top-[20px] left-[-100px]" alt="" src={moca1}/>
      <img className="hidden md:flex absolute  md:w-[450px] lg:w-[550px] h-auto bottom-[-140px] right-[-200px]" alt="" src={moca2}/>
      

        <div className=" w-[80%] h-[10%] mb-[10px]">
          <img className="w-[170px] md:w-[270px] h-auto" alt="" src={logo} />
        </div>
        <div className="md:flex md-w-full md:h-[90%] justify-center items-center">
          <div className="flex md:hidden w-full h-[300px] mb-[15px] justify-center items-center self-center">
            <img className="flex w-[270px] h-auto" alt="" src={ilustraMobile} />
          </div>
          <div className=" flex flex-col md:w-[400px] md:h-[300px] md:border-[1px] md:border-[#DADADA] rounded-[5px] justify-center align-center">
           <TitleSub
            title="Hello!"
            subtitle="Forward is a place were good practices of consume are encouraged. Login to go forward!"
          />
            <div className="flex w-full h-auto  justify-center items-center mt-[15px]">
            <Link to="/login">
              <BlueBtn name="Login" />
            </Link>
           </div>
           <div className="flex w-full h-auto mb-[10px] justify-center items-center">
            <Link to="/register">
              <PinkBtn name="Register" />
            </Link>
           </div>
        </div>
        </div>
       

      </div>
    </section>
  );
};

export default InicialPage;
