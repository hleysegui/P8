import { render, screen, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Accordion from "../Accordion"
import userEvent from "@testing-library/user-event"
import { act } from "@testing-library/react-hooks"

describe('Accordion test', () => {
    const equipment = ["Clim", "Frigo", "micro-onde"]

    it("test arrow change on click", async () => {
        const user = userEvent.setup()

        render(<Accordion body={equipment}/>)
        expect(screen.queryByAltText("arrow-down")).not.toBeInTheDocument()
        await user.click(screen.getByAltText("arrow-up"))
        expect(screen.queryByAltText("arrow-down")).toBeInTheDocument()
    })
})