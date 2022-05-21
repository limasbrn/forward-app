import React from "react";

const InputEmail = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    className="flex w-[280px] h-[35px] border border-[#868686] rounded-[5px] items-center justify-center font-thin text-[14px] text-[#868686] p-[15px]"
    {...props}
  />
));

export default InputEmail;
