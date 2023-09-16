import AboutRewards from './AboutRewards'

export default function AboutRewardsContainer() {
  return (
    <section>
        <AboutRewards 
            name={"Bamboo Stand"}
            amount={25}
            description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
            stock={101}
        />
        <AboutRewards 
            name={"Broom Stick"}
            amount={2500}
            description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
            stock={10000}
        />
        <AboutRewards 
            name={"The Out of Stock Reward"}
            amount={0}
            description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
            stock={0}
        />
    </section>
  )
}
