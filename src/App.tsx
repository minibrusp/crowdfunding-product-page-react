import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Nav from "./components/Nav"


function App() {

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
