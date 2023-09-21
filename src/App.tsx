import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Nav from "./components/Nav"
import { useRewardsStore } from "./stores/useRewardsStore"
import { useStatsStore } from "./stores/useStatsStore"
import { useEffect } from "react"


function App() {

  const fetchStats = useStatsStore((state) => state.fetchStats)
  const getStatsFromLocalStorage = useStatsStore((state) => state.getStatsFromLocalStorage)
  const fetchRewards = useRewardsStore((state) => state.fetchRewards)
  const getRewardsFromLocalStorage = useRewardsStore((state) => state.getRewardsFromLocalStorage)

  const initialize = (type : string) => {
    if(type === "storage") {
      getStatsFromLocalStorage()
      getRewardsFromLocalStorage()
      return
    }
    // fetchStats('http://localhost:3000/stats')
    // fetchRewards('http://localhost:3000/rewards')
    fetchStats()
    fetchRewards()
  }

  useEffect(() => {
    const rewards = localStorage.getItem('rewards')
    const stats = localStorage.getItem('stats')
    

    if(rewards && stats) {
      return initialize("storage")
    }

    initialize("")
  }, [])

  return (
    <div className="relative h-full">
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />  
    </div>
  )
}

export default App
