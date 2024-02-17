import { render } from "@testing-library/react"
import Logement from "./Logement"
import { APIContextProvider } from "src/services/apiContext"
import { mount } from "@vue/test-utils"
import Slider from "components/reusable/slider"
import Tags from "components/Tags"
import Rating from "components/Rating"
import Accordion from "components/Accordion"
import Spinner from "components/Spinner.jsx"

describe('', () => {
    it('Check child composant exist', () => {
        const wrapper = mount(<Logement />)
        expect(wrapper.findComponent(<Slider />).exists()).toBe(false)
        expect(wrapper.findComponent(<Tags />).exists()).toBe(false)
        expect(wrapper.findComponent(<Rating />).exists()).toBe(false)
        expect(wrapper.findComponent(<Accordion />).exists()).toBe(false)
        expect(wrapper.findComponent(<Spinner />).exists()).toBe(false)
    
    })

    it('Render logement component', () => {
        render(
            <APIContextProvider>
                <Logement />
            </APIContextProvider>
        )
    })

})



