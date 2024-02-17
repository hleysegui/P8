import { render } from "@testing-library/react"
import Error404  from "./Error404"
import { MemoryRouter, Route, Routes } from "react-router-dom"


it('', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/*" element={<Error404/>}></Route>
            </Routes>
        </MemoryRouter>
    )
})