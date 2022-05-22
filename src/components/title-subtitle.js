import React from "react";

function TitleSub(props) {
  return (
    <section className="flex w-full md:w-[400px] h-[100px] justify-center items-center">
      <div className="flex flex-col w-[80%] justify-center items-center">
        <h1 className="flex text-center text-[#343E48] text-[25px] font-bold">
          {props.title}
        </h1>
        <span className="flex text-center font-medium text-[#868686] text-[14px]">
          {props.subtitle}
        </span>
      </div>
    </section>
  );
}

export default TitleSub;
