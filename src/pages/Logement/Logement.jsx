import { useParams } from "react-router-dom"
import { useAPI } from "../../services/apiContext"
import Error404 from "../Error/Error404.jsx"
import Slider from "../../components/reusable/slider"
import Host from '/src/assets/images/Host.svg'
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Accordion from "../../components/Accordion"

function Logements() {

  const { getLogementById } = useAPI()
  const { error } = useAPI() 
  const { id } = useParams()
  const logement = getLogementById(id)

    console.log(logement)

    if(!logement) {
      return <Error404 />
    }

    return (
      <>
        {/* <main>
          {!error ?
            <section className="caracteristique">
              <Slider 
                picture={logement.pictures}
                alt={logement.title}
              />
              <div className="caracteristique__general">
                <div className="caracteristique__general--info">
                    <h1>{logement.title}</h1>
                    <span>{logement.location}</span>
                </div>
                <div className="caracteristique__general--owner">
                <span className="general--owner-name">{logement.host.name}</span>
                    {logement.host.picture === null 
                    ? <img src={Host} alt={logement.host.name}/> 
                    : <img src={logement.host.picture} alt={logement.host.name}/>}
                </div>
            </div>
            <div className="caracteristique__satisfaction">
                <Tags tags={logement.tags}/>
                <Rating notation={logement.rating}/>
            </div>
            <div className="caracteristique__specificities">
                <Accordion
                    header="Description"
                    body={logement.description}
                />
                <Accordion
                    header="Équipements"
                    body={logement.equipments}
                />
            </div>
            </section>
         : (<Error404 />) }
        </main> */}

<main>
          {!error ?
            <section className="caracteristique">
              <Slider 
                picture={logement.pictures}
                alt={logement.title}
              />
              <div className="caracteristique__content">
                <div className="caracteristique__general">
                  <div className="caracteristique__general--info">
                      <h1>{logement.title}</h1>
                      <span>{logement.location}</span>
                  </div>
                  <Tags tags={logement.tags}/>
                </div>
                <div className="caracteristique__satisfaction">
                  <Rating notation={logement.rating}/>
                  <div className="caracteristique__general--owner">
                      <span className="general--owner-name">{logement.host.name}</span>
                          {logement.host.picture === null 
                          ? <img src={Host} alt={logement.host.name}/> 
                          : <img src={logement.host.picture} alt={logement.host.name}/>}
                  </div>
                </div>
                <div className="caracteristique__specificities">
                  <Accordion
                      header="Description"
                      body={logement.description}
                  />
                  <Accordion
                      header="Équipements"
                      body={logement.equipments}
                  />
                </div>
            </div>
              
          
            </section>
         : (<Error404 />) }
        </main>
      </>
    )
  }

  export default Logements