import React from 'react' ;

function BlueBtn(props) {
    const {...restProps} = props

    return(
        <React.Fragment>
            <button type='submit' className="flex w-[200px] h-[40px] text-white text-[14px] bg-[#343E48] rounded-[30px] items-center justify-center mb-[15px]" {...restProps}>{props.name}</button>
        </React.Fragment>
    )

}

export default BlueBtn;