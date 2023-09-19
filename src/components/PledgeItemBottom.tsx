import React, { useState } from "react"

type PledgeItemBottomProps = {
	value: number,
	name: string,
}

export default function PledgeItemBottom({ value, name } : PledgeItemBottomProps ) {

	const [initialValue, setValue] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(Number(e.target.value))
  }

  return (
    <div className="reward_modal_cta_container flex flex-col items-center justify-center border-t border-solid border-neutral-black/20">
        <p className="text-neutral-dark-gray text-sm leading-[1.7] my-[23px]">Enter your pledge</p>
        <div className="text-[0.83333125rem] modal_cta flex flex-nowrap justify-evenly items-center w-[50vw]">
          <div className="cta_input_container relative mr-[15px]">
            <input 
              type="number" 
              name={`${value}`} 
              min={value}
              value={initialValue} 
              id={name} 
              className="w-24 py-4 pr-[0.7rem] pl-[2.4rem] outline-none rounded-[35px] font-semibold font-commissioner border border-solid border-neutral-black/20 focus:border-primary-moderate-cyan focus-within:border-primary-moderate-cyan"
              onChange={handleChange}
            />
            <label htmlFor={name}
              className="block absolute top-[17px] left-6 text-neutral-black/40 font-bold text-sm"
            >$</label>
          </div>
          <button 
            className="bg-primary-moderate-cyan border-none text-white font-bold py-4 px-[1.9rem] rounded-[25px] cursor-pointer hover:bg-primary-dark-cyan"
          >Continue</button>
        </div>
		</div>
  )
}