import React from "react"
import { useAPI } from "../../services/apiContext"
import Card from "../../components/reusable/Card";

/**
 * Call component card for fill with data api and display information
 * @returns { HTMLElement }
 */
function Logements() {
    const { logements } = useAPI()

    return (
      <div className="gallery">
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

    )
  }

  export default Logements