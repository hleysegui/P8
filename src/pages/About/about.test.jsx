import { render } from "@testing-library/react"
import About from "./About"
import { mount } from "@vue/test-utils"
import Accordion from "src/components/Accordion"
import { describe, it } from "vitest"

describe('About component', () => {
    it('test if child exist ', () => {
        const wrapper = mount(<About />)
        expect(wrapper.findComponent(<Accordion />).exists()).toBe(false)
    })

    it('render component', () => {
        render(<About />)
    })
})

    