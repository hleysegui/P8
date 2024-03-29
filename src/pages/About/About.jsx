import { useEffect, useState } from "react"
import Banner from "components/reusable/Banner"
import bannerAbout from 'src/assets/images/banner-about.png'
import Accordion from "components/Accordion"

/**
 * Page wich render element from json file
 * @returns {HTMLElement}
 * @throws {NotFoundError} Call data failed 
 */
function About() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data/about.json')
                const data = await response.json()
                setFaqs(data)

            }catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return (
        <main>
            <div className="about">
                <Banner image={ bannerAbout } text=""/>
                <div className="accordion__content">
                    {faqs.map((faq, index) => (
                        <Accordion key={`${faq}-${index}`}
                        header={faq.title}
                        body={faq.content}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default About