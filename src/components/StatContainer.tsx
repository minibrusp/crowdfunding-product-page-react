import Stat from "./Stat"
import { Stats } from "../stores/useStatsStore"



function StatContainer({ backed, backers, days} : Stats) {
  return (
    <>
        <div>
            <Stat value={backed} type="backed" />
            <Stat value={backers} type="backers" />
            <Stat value={days} type="days" />
        </div>
        
    </>
  )
}

export default StatContainer