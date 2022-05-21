import React from 'react' ;

function PinkBtn(props) {
    const {...restProps} = props

    return(
        <React.Fragment>
            <button className="flex w-[200px] h-[40px] text-white text-[14px] bg-[#B0A7A6] rounded-[30px] items-center justify-center mb-[15px] font-medium text-[16px]" {...restProps}>{props.name}</button>
        </React.Fragment>
    )

}

export default PinkBtn;