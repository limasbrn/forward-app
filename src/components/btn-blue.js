import React from "react";

function BlueBtn(props) {
  return (
    <button
      type="submit"
      className="flex w-[200px] h-[40px] text-white text-[14px] bg-[#343E48] rounded-[30px] items-center justify-center mt-[15px] mb-[15px] font-medium text-[16px]"
      {...props}
    >
      {props.name}
    </button>
  );
}

export default BlueBtn;
