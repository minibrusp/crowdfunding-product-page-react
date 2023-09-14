import ProgressBar from "./ProgressBar"
import StatContainer from "./StatContainer"

function CardStats() {
  return (
    <div className="card text-center">
        <StatContainer />
        <ProgressBar value={89915} max={100000} />
    </div>
  )
}

export default CardStats