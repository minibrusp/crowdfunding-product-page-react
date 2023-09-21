import { useEffect, useState } from "react"
import { useRewardModalStore } from "../stores/useRewardModalStore"


function CardCtaButtons() {

  const [isBookMarked, setIsBookMarked] = useState(false)
  const openRewardModal = useRewardModalStore((state) => state.setIsModalOpen)

  const handleBookMarkClick = () => {
    setIsBookMarked(prev => {
      localStorage.setItem('isBookMarked', JSON.stringify(!prev))
      return !prev
    })
  }

  useEffect(() => {
    const bookmarked = localStorage.getItem('isBookMarked')
    if(!bookmarked) return
    setIsBookMarked(JSON.parse(bookmarked))
  }, [])

  return (
    <div className="flex justify-center items-center">
        <button 
          className="bg-primary-moderate-cyan border-none text-white font-bold py-4 px-8 first-of-type:text-[0.9rem] first-of-type:w-[55vw] first-of-type:rounded-[30px] hover:bg-primary-dark-cyan" 
          onClick={() => openRewardModal()}
        >
          Back this project
        </button>
        <button 
          className="group border-none text-white font-bold ml-[10px] text-center"
          onClick={handleBookMarkClick}
        >
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle className={`group-hover:fill-[#707070]`} fill={`${ isBookMarked ? '#147b74' : '#2F2F2F'}`} cx="28" cy="28" r="28"/>
              <path className="group-hover:fill-[#B1B1B1]" fill={`${ isBookMarked ? 'white' : '#B1B1B1'} `} d="M23 19v18l5-5.058L33 37V19z"/>
            </g>
          </svg>
          <span className="hidden">Bookmarked</span>
        </button>
    </div>
  )
}

export default CardCtaButtons