import { useStatsStore } from "../stores/useStatsStore"
import ProgressBar from "./ProgressBar"
import StatContainer from "./StatContainer"
import { useEffect } from "react"

function CardStats() {

  const stats = useStatsStore((state) => state.stats)
  const fetchStats = useStatsStore((state) => state.fetchStats)

  useEffect(() => {
    fetchStats('http://localhost:3000/stats')
  }, [])

  return (
    <div className="card text-center">
        <StatContainer backed={stats.backed} backers={stats.backers} days={stats.days} />
        <ProgressBar value={stats.backed} max={100000} />
    </div>
  )
}

export default CardStats