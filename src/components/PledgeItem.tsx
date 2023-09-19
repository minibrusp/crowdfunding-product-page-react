import { useMemo } from "react"
import PledgeItemBottom from "./PledgeItemBottom"
import PledgeItemTop from "./PledgeItemTop"

type PledgeItemProps = {
	id: number,
	value: number,
	name: string,
	description: string,
  stock: number,
	isSelected: boolean
	setSelected: (id: number) => void
}

export default function PledgeItem({ id, value, name, description, stock, isSelected, setSelected } : PledgeItemProps) {
  
  const isOutOfStock = useMemo(() => {
    return stock < 1 ? true : false
  }, [stock])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(isOutOfStock) return
		setSelected(Number(e.target.id))
	}

  return (
    <label 
			className={`rewards_card py-[23px] px-0 cursor-pointer outline-none block ${isSelected && 'border-2 border-solid border-primary-moderate-cyan'} ${isOutOfStock && 'cursor-default'}  `}
		>

      <PledgeItemTop 
        id={id}
        value={value}
        name={name}
        description={description}
        stock={stock}
        isOutOfStock={isOutOfStock}
        isSelected={isSelected}
        handleChange={handleChange}
      />

      { isSelected && 
        <PledgeItemBottom 
          value={value}
          name={name}
        />
      }
      

    </label>
  );
}
