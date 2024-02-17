import { render, screen } from "@testing-library/react"
import Accordion from "../Accordion"
import userEvent from "@testing-library/user-event"

describe('Accordion test', () => {
    const equipment = ["Clim", "Frigo", "micro-onde"]

    it("test arrow change on click", async () => {
        const user = userEvent.setup()

        render(<Accordion body={equipment}/>)
        expect(screen.queryByAltText("arrow-down")).toBeNull()
        await user.click(screen.getByAltText("arrow-up"))
        expect(screen.queryByAltText("arrow-up")).toBeNull()
    })
})