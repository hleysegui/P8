import Footer from "../layouts/Footer"
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render without problems', () => {
        render(<Footer />)
        const footer = screen.getByRole('footer')
        expect(footer.className).toBe('footer')
    })
})