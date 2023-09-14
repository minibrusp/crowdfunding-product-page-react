import Stat from "./Stat"

function StatContainer() {
  return (
    <>
        <div>
            <Stat value={89914} type="backed" />
            <Stat value={5007} type="backers" />
            <Stat value={56} type="days" />
        </div>
        
    </>
  )
}

export default StatContainer