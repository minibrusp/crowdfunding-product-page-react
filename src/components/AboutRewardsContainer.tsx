import { useEffect } from 'react'
import { useRewardsStore } from '../stores/useRewardsStore'
import AboutRewards from './AboutRewards'

export default function AboutRewardsContainer() {

  const Rewards = useRewardsStore((state) => state.rewards)
  const getRewards = useRewardsStore((state) => state.fetchRewards)
  
  useEffect(() => {
    getRewards('http://localhost:3000/rewards')
  }, [])

  return (
    <section>        
    {Rewards.map((reward, index) => (
      <AboutRewards
        key={index}
        name={reward.name}
        amount={reward.amount}
        description={reward.description}
        stock={reward.stock}
      />
    ))}
    </section>
  )
}
