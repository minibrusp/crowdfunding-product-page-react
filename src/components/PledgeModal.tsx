import { useRewardModalStore } from "../stores/useRewardModalStore";
import { useRewardsStore } from "../stores/useRewardsStore";
import PledgeForm from "./PledgeForm";
import PledgeSuccess from "./PledgeSuccess";

export default function PledgeModal() {

  const closeRewardModal = useRewardModalStore((state) => state.setIsModalClose)
  const resetSelectedReward = useRewardsStore((state) => state.resetSelected)
  const isPledgeSuccess = useRewardModalStore((state) => state.isPledgeSuccess)

  const handleCloseModalClick = () => {
    resetSelectedReward()
    closeRewardModal()
  }

  return (
    <section 
        className="bg-neutral-black/50 font-commissioner block absolute left-0 top-0 py-[95px] px-[23px] z-30 h-full w-full md:w-full"
    >
      {
        !isPledgeSuccess ? 
        (
          <div className="card screen-850:py-[50px] screen-850:px-[45px]">
              <div className="flex justify-between items-center">
                  <h2 className="text-[1.1rem] outline-none font-bold screen-850:text-2xl screen-850:mt-0 screen-850:mb-[3px] screen-850:mx-0">Back this project</h2>
                  <span 
                    className="modal__close bg-icon-close-modal bg-no-repeat h-[14px] w-[14px] inline-block cursor-pointer"
                    onClick={handleCloseModalClick}
                  ></span>
              </div>
              <p className="text-neutral-dark-gray text-sm my-[14px] leading-[1.7] screen-850:mx-auto screen-850:mt-[13px] screen-850:mb-[34px] screen-850:text-base">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
              
              <PledgeForm />
          </div>
        ) 
        : 
        (
          <PledgeSuccess />
        )
      }
      
      
    </section>
  )
}
