import Banner from "components/reusable/Banner"
import { useAPI } from "../../services/apiContext"
import bannerHome from 'src/assets/images/banner-home.png'
import Card from 'components/reusable/Card'
import Spinner from "components/Spinner"

/**
 * Page d'accueil receive data from API for display list of all properties
 * @returns {HTMLElement}
 */
function Home() {

    const { logements, isLoading } = useAPI()
 
    return (
        <main>
           <Banner image={ bannerHome } span="Chez vous," text=" partout et ailleurs" />
            <div className="gallery">
            { isLoading && <Spinner /> }
                <div className="gallery__container">
                    {logements.map((logement) => (
                        <Card 
                        id= {logement.id}
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                        />
                    ))}
                </div>
            </div> 
        </main>
    )
}

export default Home