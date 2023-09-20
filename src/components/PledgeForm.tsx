import PledgeItem from "./PledgeItem";
import { useRewardsStore } from "../stores/useRewardsStore";

export default function PledgeForm() {
	const items = useRewardsStore((state) => state.rewards)

	const setSelected = useRewardsStore((state) => state.setSelected)

  return (
    <form action="submit">
        <fieldset id="rewards__fieldset" className="border-none m-0 p-0">
					
					{
						items.map((item, index) => (
							<PledgeItem 
								index={index}
								key={index}
								id={item.id}
								name={item.name}
								description={item.description}
								value={item.amount}
								stock={item.stock}
								isSelected={item.selected}
								setSelected={setSelected}
							/>
						))
					}
						
        </fieldset>
    </form>
	)
}
