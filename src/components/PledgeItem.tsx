import { useMemo } from "react"
import PledgeItemBottom from "./PledgeItemBottom"
import {PledgeItemTop} from "./PledgeItemTop"

type PledgeItemProps = {
  index: number,
	id: number,
	value: number,
	name: string,
	description: string,
  stock: number,
	isSelected: boolean,
	setSelected: (id: number) => void,
  noreward?: boolean,
  handleFormSubmit: (e: React.MouseEvent, submittedValue: number, id: number) => void
}

export default function PledgeItem({ index, id, value, name, description, stock, isSelected, setSelected, noreward, handleFormSubmit } : PledgeItemProps) {

  const isOutOfStock = useMemo(() => {
    return stock < 1 ? true : false
  }, [stock])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(isOutOfStock) return
		setSelected(Number(e.target.id))
	}

  const handleSubmit = (e: React.MouseEvent, submittedValue: number) => {
    handleFormSubmit(e, submittedValue, id)
  }



  return (
    <label 
			className={`rewards_card py-[23px] px-0 cursor-pointer outline-none block ${isSelected && 'border-2 border-solid border-primary-moderate-cyan'} ${(isOutOfStock) ? 'cursor-default' : '' }  md:flex md:flex-col md:pt-[30px] md:pb-5 md:mx-0 md:max-w-[640px] `}
		>

      <PledgeItemTop 
        index={index}
        id={id}
        value={value}
        name={name}
        description={description}
        stock={stock}
        isOutOfStock={isOutOfStock}
        isSelected={isSelected}
        handleChange={handleChange}
        noreward={noreward}
      />

      { isSelected && 
        <PledgeItemBottom 
          value={value}
          name={name}
          handleSubmit={handleSubmit}
        />
      }
      

    </label>
  );
}
