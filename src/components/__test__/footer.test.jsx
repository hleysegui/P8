import { describe } from "vitest"
import Footer from "../layouts/Footer"
import { render } from '@testing-library/react'

describe('Footer', () => {
    it('Should render without problems', () => {
        render(<Footer />)
    })
})