import Stat from "./Stat"
import { Stats } from "../stores/useStatsStore"



function StatContainer({ backed, backers, days} : Stats) {
  return (
    <>
        <div className="md:flex md:justify-start md:items-center md:py-0 md:px-[30px]">
            <Stat value={backed} type="backed" />
            <Stat value={backers} type="backers" />
            <Stat value={days} type="days" />
        </div>
        
    </>
  )
}

export default StatContainer