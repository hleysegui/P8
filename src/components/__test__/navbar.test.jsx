import { render } from "@testing-library/react"
import Navbar  from "../Navbar"
import { BrowserRouter } from "react-router-dom"

it('the navbar render correctly', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
})