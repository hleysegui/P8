import { render } from "@testing-library/react"
import Tags from "../Tags"

const tag = [
    "Canal Saint Martin",
    "République",
    "Appartement"
]

it('tag render correctly and show all tag', () => {
    render(<Tags tags={tag}/>)
    const list = document.querySelectorAll('li').length
    expect(list).toBe(3)
})