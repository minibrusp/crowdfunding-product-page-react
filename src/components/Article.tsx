import About from "./About"
import AboutRewardsContainer from "./AboutRewardsContainer"
import HeaderArticle from "./HeaderArticle"



function Article() {
  return (
    <article className="my-[-85px] mx-6 rounded-[10px] font-commissioner screen-850:my-[-120px] screen-850:mx-6">
        <HeaderArticle />
        <About>
          <AboutRewardsContainer />
        </About>
    </article>
  )
}

export default Article