import React from "react";

const InputEmail = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    type="email"
    name="email"
    className="flex w-[280px] h-[35px] border border-[#868686] rounded-[5px] items-center justify-center font-thin text-[14px] text-[#868686] p-[15px]"
    placeholder="E-mail"
  />
));

export default InputEmail;
