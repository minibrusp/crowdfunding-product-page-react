import { useRewardsStore } from '../stores/useRewardsStore'
import AboutRewards from './AboutRewards'

export default function AboutRewardsContainer() {

  const Rewards = useRewardsStore((state) => state.rewards)

  return (
    <section>        
    {Rewards.map((reward, index) => {
      if(reward.noreward) return
      return (
        <AboutRewards
          key={index}
          id={reward.id}
          name={reward.name}
          amount={reward.amount}
          description={reward.description}
          stock={reward.stock}
        />
      )
    }
      
    )}
    </section>
  )
}
