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
    <div className="success card flex flex-col justify-center items-center fixed left-1/2 top-1/2 w-[83.5vw] max-w-[540px] translate-x-[-50%] translate-y-[-50%] text-center text-[19px] md:max-w-[540px]">
			<div>
				<img src={CheckIconSvg} alt="Check Icon" />
			</div>
			<div className="text-neutral-dark-gray text-sm">
				<p className="my-[14px] leading-[1.7]">
					<strong className="text-neutral-black">
						Thanks for your support!
					</strong>
				</p>
				<p className="my-[14px] leading-[1.7]">
				Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
				</p>
			</div>
			<div className="mt-4">
				<button 
					className="bg-primary-moderate-cyan text-white text-[0.83333125rem] border-none font-bold py-4 px-8 rounded-[25px] cursor-pointer"
					onClick={handleBtnClick}
				>Got it!</button>
			</div>
    </div>
  )
}
