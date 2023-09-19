import Article from "./Article"
import PledgeModal from "./PledgeModal"
import { useRewardModal } from "../stores/useRewardModal"


function Main() {

  const isModalOpen = useRewardModal((state) => state.isModalOpen)

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