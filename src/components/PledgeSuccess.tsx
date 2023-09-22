import CheckIconSvg from "../assets/images/icon-check.svg"
import { useRewardModalStore } from "../stores/useRewardModalStore"
import { useStatsStore } from "../stores/useStatsStore"

export default function PledgeSuccess() {

	const closeRewardModal = useRewardModalStore((state) => state.setIsModalClose)
	const resetIsPledgeSuccess = useRewardModalStore((state) => state.resetIsPledgeSuccess)
	const statsContainerRef = useStatsStore((state) => state.statsContainerRef)

	const handleBtnClick = () => {
		resetIsPledgeSuccess()
		closeRewardModal()
		statsContainerRef!.scrollIntoView({ behavior: 'smooth', block: 'center'})
	}

  return (
    <div className="success card flex flex-col justify-center items-center fixed left-1/2 top-1/2 w-[83.5vw] max-w-[540px] translate-x-[-50%] translate-y-[-50%] text-center text-[19px] md:max-w-[540px] screen-850:py-[50px] screen-850:px-[45px]">
			<div>
				<img src={CheckIconSvg} alt="Check Icon" className="screen-850:w-[90px] screen-850:h-[90px]" />
			</div>
			<div className="text-neutral-dark-gray text-sm">
				<p className="my-[14px] leading-[1.7] screen-850:my-[13px] screen-850:mx-auto screen-850:mt-10 screen-850:mb-0 screen-850:text-base">
					<strong className="text-neutral-black screen-850:text-2xl screen-850:my-[13px] screen-850:mx-auto">
						Thanks for your support!
					</strong>
				</p>
				<p className="my-[14px] leading-[1.7] screen-850:text-base screen-850:mx-auto screen-850:mt-[40px] screen-850:mb-0 screen-850:leading-[1.7] screen-850:even:mt-[10px]">
				Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
				</p>
			</div>
			<div className="mt-4">
				<button 
					className="bg-primary-moderate-cyan text-white text-[0.83333125rem] border-none font-bold py-4 px-8 rounded-[25px] cursor-pointer screen-850:mt-[10px]"
					onClick={handleBtnClick}
				>Got it!</button>
			</div>
    </div>
  )
}
