import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import LastFooter from "./components/LastFooter"
import Menu from "./components/Menu"
import Protfolio from "./components/Protfolio"
import Skill from "./components/Skill"

function App() {

  return (
    <>
    <Menu/>
    <Banner/>
      <About />
      <Skill />
      <Protfolio />
      <Contact />
      <LastFooter/>
    </>
  )
}

export default App
