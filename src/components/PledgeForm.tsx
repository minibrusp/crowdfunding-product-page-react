import PledgeItem from "./PledgeItem";
import { useRewardsStore } from "../stores/useRewardsStore";
import { useStatsStore } from "../stores/useStatsStore";
import { useRewardModalStore } from "../stores/useRewardModalStore";

export default function PledgeForm() {
	const items = useRewardsStore((state) => state.rewards)
	const reduceStock = useRewardsStore((state) => state.reduceStock)
	const setSelected = useRewardsStore((state) => state.setSelected)
	const updateStats = useStatsStore((state) => state.updateStats)
	const closeRewardModal = useRewardModalStore((state) => state.setIsModalClose)
	const resetSelectedReward = useRewardsStore((state) => state.resetSelected)

	const handleFormSubmit = (e: React.MouseEvent, submittedValue: number, id: number) => {
		e.preventDefault()
		reduceStock(id)
		updateStats(submittedValue)
		resetSelectedReward()
		closeRewardModal()
	}

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
						noreward={item.noreward}
						handleFormSubmit={handleFormSubmit}
					/>
				))
			}
						
		</fieldset>
	</form>
	)
}
