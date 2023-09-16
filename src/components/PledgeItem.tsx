import { useState, useRef, useEffect } from "react";

type PledgeItemProps = {
	id: number,
	value: number,
	name: string,
	description: string,
	isSelected: boolean
	setSelected: (id: number) => void
}

export default function PledgeItem({ id, value, name, description, isSelected, setSelected } : PledgeItemProps) {
	// const [isSelected, setIsSelected] = useState(false)
	// const radioRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelected(Number(e.target.id))
		
	}

  return (
    <label 
			className={`rewards_card py-[23px] px-0 cursor-pointer outline-none block ${isSelected && 'peer-checked:opacity-100'}`}
		>
      <div className="reward_modal_top py-0 px-[23px]">
        <div className="radio_container flex items-center">
          <span className="m-0 mr-[10px] h-6 w-6 border border-solid border-neutral-black/20 rounded-[50%] flex justify-center items-center cursor-pointer">
            <input
							id={`${id}`}
              type="radio"
              // value={25}
              value={value}
              name="pledges"
              className="peer hidden"
							onChange={handleChange}
							// checked={isSelected}
							// ref={radioRef}
            />
            <span className={`checkmark w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[50%] bg-primary-moderate-cyan opacity-0 transition-opacity duration-500 ease-linear ${isSelected && 'peer-checked:opacity-100'}`}></span>
          </span>
          <span className="cursor-pointer text-[0.9rem]">
            <span className=" font-semibold">{name}</span>
            <span className="block mx-auto text-primary-moderate-cyan font-medium">
              Pledge ${`${value}`} or more
						</span>
          </span>
        </div>
      </div>
    </label>
  );
}
