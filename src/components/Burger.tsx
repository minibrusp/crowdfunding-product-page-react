
type BurgerProps = {
  isBurgerOpen: boolean,
  handleBurgerClick: React.MouseEventHandler<HTMLLabelElement>
}

function Burger({isBurgerOpen, handleBurgerClick} : BurgerProps) {
  return (
    <div className="screen-850:hidden">
      <input 
        type="checkbox" 
        name="burgerMenuCheckbox" 
        id="burgerMenuCheckbox" 
        className="peer hidden"
        checked={isBurgerOpen}
        readOnly={true} 
      />
      <label 
        htmlFor="burgerMenuCheckbox" 
        className="bg-burger-menu w-5 h-[15px] inline-block cursor-pointer peer-checked:bg-burger-close peer-checked:h-5 peer-checked:bg-center peer-checked:bg-no-repeat"
        onClick={handleBurgerClick} 
      >
        <span className="hidden">Menu</span>
      </label>
    </div>
  )
}

export default Burger