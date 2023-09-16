import About from "./About"
import AboutRewardsContainer from "./AboutRewardsContainer"
import HeaderArticle from "./HeaderArticle"



function Article() {
  return (
    <article className="my-[-85px] mx-6 rounded-[10px] font-commissioner">
        <HeaderArticle />
        <About>
          <AboutRewardsContainer />
        </About>
    </article>
  )
}

export default Article