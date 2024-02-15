import { describe, expect, it } from "vitest";
import Rating from "../Rating";
import { render, screen } from "@testing-library/react";

describe('Test rating depend notation', () => {
    it('test notation 1', () => {
        const notation = 1
        render (<Rating notation={notation}/>)
        const starActive = screen.getAllByAltText(notation)
        expect(starActive).toHaveLength(1)
    })

    it('test notation 2', () => {
        const notation = 2
        render (<Rating notation={notation}/>)
        const starActive = screen.getAllByAltText(notation)
        expect(starActive).toHaveLength(2)
    })
    it('test notation 3', () => {
        const notation = 3
        render (<Rating notation={notation}/>)
        const starActive = screen.getAllByAltText(notation)
        expect(starActive).toHaveLength(3)
    })
    it('test notation 4', () => {
        const notation = 4
        render (<Rating notation={notation}/>)
        const starActive = screen.getAllByAltText(notation)
        expect(starActive).toHaveLength(4)
    })
    it('test notation 5', () => {
        const notation = 5
        render (<Rating notation={notation}/>)
        const starActive = screen.getAllByAltText(notation)
        expect(starActive).toHaveLength(5)
    })
})