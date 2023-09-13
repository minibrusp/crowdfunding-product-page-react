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
    <nav className="flex items-center justify-between relative z-20">
        <Logo />
        <Burger isBurgerOpen={isBurgerOpen} handleBurgerClick={handleBurgerClick} />
        {isBurgerOpen && 
          <div 
            className="h-[95vh] bg-gradient-to-b from-black to-transparent block w-full fixed left-0 top-0 opacity-70 -z-10"
            onClick={handleBurgerClose}
          ></div>
        }
        {
          isBurgerOpen && 
          <ul className={`mt-14 pl-0 absolute w-full top-0 left-0 bg-white rounded-[10px] min-h-[227px] overflow-hidden block"}`}>
            <li className="border-b border-neutral-dark-gray/40"
              onClick={handleBurgerClose}
            >
              <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan">
                About
              </a>
            </li>
            <li className="border-b border-neutral-dark-gray/40"
              onClick={handleBurgerClose}
            >
              <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan">
                Discover
              </a>
            </li>
            <li className="border-b border-neutral-dark-gray/40"
              onClick={handleBurgerClose}
            >
              <a href="#" className="py-7 px-[25px] font-medium text-neutral-black block hover:bg-primary-moderate-cyan">
                Get Started
              </a>
            </li>
          </ul>
        }
    </nav>
  )
}

export default Nav