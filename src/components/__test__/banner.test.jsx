import { render } from "@testing-library/react"
import Banner from "../reusable/Banner"
import bannerAbout from 'src/assets/images/banner-about.png'

describe('Test banner', () => {
    it('should require a picture', () => {
        const text = "ceci est mon texte"
        render(<Banner image={bannerAbout} text={text}/>)
        const picture = document.querySelector("img")
        expect(picture.alt).toContain("image-banniere")
    })
})

