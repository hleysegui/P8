import { Route, Routes } from "react-router"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Error404 from "./pages/Error/Error404"
import Fiche from "./pages/Logement/Fiche"
import { APIContextProvider } from "./services/apiContext"
 
function App() {

  return (
    <APIContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Fiche />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </APIContextProvider>
    
  )
}

export default App
