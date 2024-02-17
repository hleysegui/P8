import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
    it("It's render correctly", async () => {
        render(
        <BrowserRouter>
            <App />
        </BrowserRouter>)
    })
})

