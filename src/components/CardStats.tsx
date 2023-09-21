import { useStatsStore } from "../stores/useStatsStore"
import ProgressBar from "./ProgressBar"
import StatContainer from "./StatContainer"

function CardStats() {

  const stats = useStatsStore((state) => state.stats)
  const SaveStatsContainerRef = useStatsStore((state) => state.SaveStatsContainerRef)

  return (
    <div className="card text-center" ref={el => SaveStatsContainerRef(el!)}>
        <StatContainer backed={stats.backed} backers={stats.backers} days={stats.days} />
        <ProgressBar value={stats.backed} max={100000} />
    </div>
  )
}

export default CardStats