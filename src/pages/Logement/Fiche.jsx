import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAPI } from "../../services/apiContext"
import Slider from "../../components/reusable/slider"
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Accordion from "../../components/Accordion"
import Host from '/src/assets/images/Host.svg'

function Fiche() {

    const { logements } = useAPI()
    const { id } = useParams()
    const [currentLogement, setCurrentLogement] = useState([])   
    const [currentLogementPictures, setCurrentLogementPictures] = useState([]); 
    const [currentLogementHost, setCurrentLogementHost] = useState([]); 
    const [currentLogementTags, setCurrentLogementTags] = useState([]); 
    const [currentLogementEquipements, setCurrentLogementEquipements] = useState([])

    const equipement = (
        <ul>
            {currentLogementEquipements.map((equip, index) => (
                <li key={`${equip}-${index}`}>{equip}</li>
            ))}
        </ul>
    )

    useEffect(() => {

        const findById = logements.find((currentLogement) => currentLogement.id === id)
        setCurrentLogement(findById)
        setCurrentLogementPictures(findById.pictures)
        setCurrentLogementHost(findById.host)
        setCurrentLogementTags(findById.tags)
        setCurrentLogementEquipements(findById.equipments)
        
    },[id]);

    console.log(currentLogement)

    return (
        <section className="caracteristique">
            <Slider 
                alt={currentLogement.title}
                picture={currentLogementPictures}
            />
            <div className="caracteristique__general">
                <div className="caracteristique__general--info">
                    <h1>{currentLogement.title}</h1>
                    <span>{currentLogement.location}</span>
                </div>
                <div className="caracteristique__general--owner">
                    <span className="general--owner-name">{currentLogementHost.name}</span>
                    {currentLogementHost.picture === null 
                    ? <img src={Host} alt={currentLogementHost.name}/> 
                    : <img src={currentLogementHost.picture} alt={currentLogementHost.name}/>}
                </div>
            </div>
            <div className="caracteristique__satisfaction">
                <Tags tags={currentLogementTags}/>
                <Rating notation={currentLogement.rating}/>
            </div>
            <div className="caracteristique__specificities">
                <Accordion
                    header="Description"
                    body={currentLogement.description}
                />
                <Accordion
                    header="Équipements"
                    body={equipement}
                />
            </div>
            
        </section>
        
      )
}

export default Fiche    