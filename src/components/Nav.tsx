import { useState } from "react"
import Burger from "./Burger"
import Logo from "./Logo"

const Nav = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setIsBurgerOpen(value => !value)
  }

  const handleBurgerClose = () => {
    setIsBurgerOpen(false)
  }

  return (
    <nav className="flex items-center justify-between relative z-20 screen-1440:my-0 screen-1440:mx-auto screen-1440:max-w-[1112px]">
        <Logo />
        <Burger isBurgerOpen={isBurgerOpen} handleBurgerClick={handleBurgerClick} />
        {isBurgerOpen && 
          <div 
            className="h-[95vh] bg-gradient-to-b from-black to-transparent block w-full fixed left-0 top-0 opacity-70 -z-10"
            onClick={handleBurgerClose}
          ></div>
        }

        <ul className={`mt-14 pl-0 absolute w-full top-0 left-0 bg-white rounded-[10px] min-h-[227px] overflow-hidden block ${isBurgerOpen ? '' : 'hidden' } screen-850:m-0 screen-850:relative screen-850:bg-[unset] screen-850:flex screen-850:justify-end screen-850:items-center screen-850:h-auto screen-850:min-h-[unset] screen-850:opacity-100 screen-850:transition-none `}>
          <li className="border-b border-neutral-dark-gray/40 screen-850:border-b-0"
            onClick={handleBurgerClose}
          >
            <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan screen-850:block screen-850:text-white screen-850:font-normal screen-850:p-0 screen-850:my-0 screen-850:mr-[10px] screen-850:ml-8 screen-850:text-[0.83rem] screen-850:transition-none screen-850:hover:bg-[unset] screen-850:hover:underline">
              About
            </a>
          </li>
          <li className="border-b border-neutral-dark-gray/40 screen-850:border-b-0"
            onClick={handleBurgerClose}
          >
            <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan screen-850:block screen-850:text-white screen-850:font-normal screen-850:p-0 screen-850:my-0 screen-850:mr-[10px] screen-850:ml-8 screen-850:text-[0.83rem] screen-850:transition-none screen-850:hover:bg-[unset] screen-850:hover:underline">
              Discover
            </a>
          </li>
          <li className="border-b border-neutral-dark-gray/40 screen-850:border-b-0"
            onClick={handleBurgerClose}
          >
            <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan screen-850:block screen-850:text-white screen-850:font-normal screen-850:p-0 screen-850:my-0 screen-850:mr-[10px] screen-850:ml-8 screen-850:text-[0.83rem] screen-850:transition-none screen-850:hover:bg-[unset] screen-850:hover:underline">
              Get Started
            </a>
          </li>
        </ul>
  
    </nav>
  )
}

export default Nav