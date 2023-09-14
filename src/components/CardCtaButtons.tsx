

function CardCtaButtons() {
  return (
    <div className="flex justify-center items-center">
        <button 
          className="bg-primary-moderate-cyan border-none text-white font-bold py-4 px-8 text-[0.9rem] first-of-type:py-5 first-of-type:w-[55vw] rounded-[30px]" 
        >
          Back this project
        </button>
        <button 
          className="border-none text-white font-bold ml-[10px] text-center"
        >
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28"/>
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
            </g>
          </svg>
          <span className="hidden">Bookmarked</span>
        </button>
    </div>
  )
}

export default CardCtaButtons