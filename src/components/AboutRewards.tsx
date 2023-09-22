import { useMemo } from "react";
import { Reward } from "../types/rewards";
import { useRewardModalStore } from "../stores/useRewardModalStore";
import { useRewardsStore } from "../stores/useRewardsStore";


export default function AboutRewards({ id, name, amount, description, stock} : Reward) {

  const openRewardModal = useRewardModalStore((state) => state.setIsModalOpen)
  const setSelectedReward = useRewardsStore((state) => state.setSelectedReward)
  const ModalRewardsRefs = useRewardModalStore((state) => state.ModalRewardsRefs)

  const isOutofStock = useMemo(() => {
    return stock <= 0 ? true : false
  }, [stock])

  const loopToRefs = async (refs: HTMLDivElement[]) => {
    await refs[id].scrollIntoView({ behavior: 'smooth', block: 'center'})
  }

  const handleBtnOnClick = async () => {

    openRewardModal()
    setSelectedReward(id)
    await loopToRefs(await ModalRewardsRefs);

  }

  return (
    <div className="rewards_card">
        <h3 className="text-[0.9rem] font-bold my-[1em] mb-[5px] md:grid-in-title md:justify-self-center md:m-0 screen-850:text-[1.2rem]">{name}</h3>
        <p className="text-primary-moderate-cyan text-sm font-medium leading-[1.6] md:grid-in-subtitle md:justify-self-end md:text-[0.9rem] screen-850:leading-[1.875]">Pledge ${amount.toLocaleString()} or more</p>
        <p className="text-neutral-dark-gray text-sm my-[23px] leading-[1.6] md:grid-in-text md:text-justify screen-850:leading-[1.875] screen-850:mx-auto screen-850:mt-[25px] screen-850:mb-[14px] screen-850:text-base">{description}</p>
        <p className="text-neutral-dark-gray text-sm my-[23px] leading-[1.7] flex flex-row items-center md:grid-in-stock md:justify-self-start md:m-0 screen-850:leading-[1.875] screen-850:text-base">
            <strong className="text-neutral-black text-[2rem] mr-[10px]">{stock.toLocaleString()}</strong>
            left
        </p>
        <button 
          className={`text-white text-sm font-bold border-none py-4 px-8 rounded-[25px] md:grid-in-button md:justify-self-end ${isOutofStock ? "bg-neutral-dark-gray" : "bg-primary-moderate-cyan"} `}
          disabled={isOutofStock}
          onClick={handleBtnOnClick}
        >
          { isOutofStock ? "Out of stock" : "Select Reward" }
        </button>
        {isOutofStock && 
          <div className="reward_outofstock bg-white opacity-[0.6] absolute top-0 left-0 block h-full w-full p-0"></div>
        }
    </div>
  )
}
