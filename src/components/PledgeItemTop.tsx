import { useRewardModalStore } from "../stores/useRewardModalStore"


type PledgeItemTopProps = {
  index: number,
	id: number,
	value: number,
	name: string,
	description: string,
  stock: number,
  isOutOfStock: boolean,
	isSelected: boolean,
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  noreward?: boolean
}

export const PledgeItemTop = ({ index, id, value, name, description, stock, isOutOfStock, isSelected, handleChange, noreward} : PledgeItemTopProps ) => {

  const addElementToRef = useRewardModalStore((state) => state.AddModalRewardsRefs)

  return (
    <div className="reward_modal_top py-0 px-[23px] md:grid md:grid-areas-modal-pledge-top md:grid-cols-[39px_repeat(2,1fr)]  md:items-center md:justify-center md:py-0 md:px-[25px] screen-850:py-0 screen-850:px-[15px]" ref={el => addElementToRef(el!, index)}>
      <div className="radio_container flex items-center md:grid-in-radioandspans">
        <span className="m-0 mr-[10px] h-6 w-6 border border-solid border-neutral-black/20 rounded-[50%] flex justify-center items-center cursor-pointer md:my-0 md:mr-[15px] md:ml-0">
          <input
            id={`${id}`}
            type="radio"
            value={value}
            name="pledges"
            className="peer hidden"
            checked={isSelected}
            onChange={handleChange}
            
          />
          <span className={`checkmark w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[50%] bg-primary-moderate-cyan opacity-0 transition-opacity duration-500 ease-linear ${isSelected && 'peer-checked:opacity-100'} `}></span>
        </span>
        <span className={`group cursor-pointer text-[0.9rem] hover:font-bold md:flex md:justify-center md:items-center `}>
          <span className=" font-semibold group-hover:text-primary-moderate-cyan md:mr-5 screen-850:text-base">{name}</span>
          {!noreward && (
            <span className={`block mx-auto text-primary-moderate-cyan font-medium group-hover:font-bold`}>
              Pledge ${`${value}`} or more
            </span>
          )}
        </span>
      </div>
      <p
        className="text-neutral-dark-gray my-[23px] text-sm leading-[1.7] md:grid-in-text md:my-5 md:mx-0 md:w-full screen-850:mx-0 screen-850:mt-[15px] screen-850:mb-3 screen-850:text-[15px] screen-850:text-base"
      >{description}</p>
      {!noreward && (
        <p className="text-neutral-dark-gray my-[23px] text-[15px] screen-850:mb-3 screen-850:text-[15px] screen-850:text-base">
          <strong className="text-neutral-black text-[1.2rem] mr-[7px]">{stock}</strong> left
        </p>
      )}
      {
        (isOutOfStock && !noreward) && 
        <div className="outofstock bg-white opacity-50 absolute left-0 top-0 w-full h-full cursor-default"></div>
      }
    </div>
  )
}
