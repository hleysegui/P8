import Banner from "../../components/reusable/Banner"
import { APIContextProvider } from "../../services/apiContext"
import Logements from "../Logement/Logement"
import bannerHome from '/src/assets/images/banner-home.png'

function Home() {
 
    return (
        <main>
           <Banner image={ bannerHome } text="Chez vous, partout et ailleurs" />
           <APIContextProvider>
                <Logements />
           </APIContextProvider>
        </main>
       
    )
}

export default Home