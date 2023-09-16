import { useMemo } from "react";
import { Reward } from "../types/rewards";


export default function AboutRewards({ name, amount, description, stock} : Reward) {

  const isOutofStock = useMemo(() => {
    return stock <= 0 ? true : false
  }, [stock])

  return (
    <div className="rewards_card">
        <h3 className="text-[0.9rem] font-bold my-[1em] mb-[5px]">{name}</h3>
        <p className="text-primary-moderate-cyan text-sm font-medium leading-[1.6]">Pledge ${amount.toLocaleString()} or more</p>
        <p className="text-neutral-dark-gray text-sm my-[23px] leading-[1.6]">{description}</p>
        <p className="text-neutral-dark-gray text-sm my-[23px] leading-[1.7] flex flex-row items-center">
            <strong className="text-neutral-black text-[2rem] mr-[10px]">{stock.toLocaleString()}</strong>
            left
        </p>
        <button 
          className={`text-white text-sm font-bold border-none py-4 px-8 rounded-[25px] ${isOutofStock ? "bg-neutral-dark-gray" : "bg-primary-moderate-cyan"} `}
          disabled={isOutofStock}
          onClick={() => console.log('hello')}
        >
          { isOutofStock ? "Out of stock" : "Select Reward" }
        </button>
        {isOutofStock && 
          <div className="reward_outofstock bg-white opacity-[0.6] absolute top-0 left-0 block h-full w-full p-0"></div>
        }
    </div>
  )
}