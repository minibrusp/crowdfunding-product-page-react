import { useMemo } from "react"

type progressBarProps = {
    value?: number,
    max: number
}

function ProgressBar({ value, max } : progressBarProps ) {
    const percentage = useMemo(() => {
      return (value! / max) * 100
    }, [value])
  return (
    <div className=" md:py-0 md:px-[30px]">
      <div className="h-3 w-full mt-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-3 bg-primary-moderate-cyan rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar