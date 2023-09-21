import Article from "./Article"
import PledgeModal from "./PledgeModal"
import { useRewardModalStore } from "../stores/useRewardModalStore"


function Main() {

  const isModalOpen = useRewardModalStore((state) => state.isModalOpen)
  const isPledgeSuccess = useRewardModalStore((state) => state.isPledgeSuccess)

  return (
    <>
      <Article />
      {(isModalOpen || isPledgeSuccess) && 
        <PledgeModal />
      }
    </>
  )
}

export default Main