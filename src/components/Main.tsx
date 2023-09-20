import Article from "./Article"
import PledgeModal from "./PledgeModal"
import { useRewardModalStore } from "../stores/useRewardModalStore"


function Main() {

  const isModalOpen = useRewardModalStore((state) => state.isModalOpen)

  return (
    <>
      <Article />
      {isModalOpen && 
        <PledgeModal />
      }
    </>
  )
}

export default Main