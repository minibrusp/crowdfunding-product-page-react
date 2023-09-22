import React, { useState } from "react"

type PledgeItemBottomProps = {
	value: number,
	name: string,
  handleSubmit: (e: React.MouseEvent, submittedValue: number) => void,
}

export default function PledgeItemBottom({ value, name, handleSubmit } : PledgeItemBottomProps ) {

	const [initialValue, setValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(Number(e.target.value))
  }

  const handleButtonSubmit = (e: React.MouseEvent) => {
    if(initialValue < value) return
    handleSubmit(e, initialValue)
  }

  return (
    <div className="reward_modal_cta_container flex flex-col items-center justify-center border-t border-solid border-neutral-black/20 md:w-full md:flex-row md:justify-between md:pt-5 md:pr-[25px] md:pb-0 md:pl-10 md:relative">
        <p className="text-neutral-dark-gray text-sm leading-[1.7] my-[23px] md:my-5 md:mx-0 md:w-full screen-850:mx-0 screen-850:mt-[15px] screen-850:mb-3 screen-850:text-base">Enter your pledge</p>
        <div className="text-[0.83333125rem] modal_cta flex flex-nowrap justify-evenly items-center w-[50vw] md:justify-end">
          <div className="cta_input_container relative mr-[15px]">
            <input 
              type="number" 
              name={`${value}`} 
              min={value}
              value={initialValue} 
              id={name} 
              className="w-24 py-4 pr-[0.7rem] pl-[2.4rem] outline-none rounded-[35px] font-semibold font-commissioner border border-solid border-neutral-black/20 focus:border-primary-moderate-cyan focus-within:border-primary-moderate-cyan screen-850:py-[0.93rem] screen-850:pr-[0.7rem] screen-850:pl-[2.4rem]"
              onChange={handleChange}
            />
            <label htmlFor={name}
              className="block absolute top-[17px] left-6 text-neutral-black/40 font-bold text-sm screen-850:top-[15px]"
            >$</label>
          </div>
          <button 
            className="bg-primary-moderate-cyan border-none text-white font-bold py-4 px-[1.9rem] rounded-[25px] cursor-pointer hover:bg-primary-dark-cyan screen-850:py-[0.9rem] screen-850:px-6"
            onClick={handleButtonSubmit}
          >Continue</button>
        </div>
		</div>
  )
}
