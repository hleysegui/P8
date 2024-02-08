import { Route, Routes } from "react-router"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Logement from "./pages/Logement/Logement"
import Error404 from "./pages/Error/Error404"
 
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/404" element={<Error404 />} /> 
    </Routes>
  )
}

export default App
