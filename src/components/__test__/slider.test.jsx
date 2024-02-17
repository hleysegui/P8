import { render } from '@testing-library/react'
import Slider from '../reusable/Slider'

const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
]

describe('Slider component', () => {
    it('Slider display correctly the pictures', () => {
        render(<Slider picture={pictures} />)
    })

    it('array have less 1 element arrow not show', () => {
        const pictures = [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        ]

        render(<Slider picture={pictures} />)

        const img = document.querySelector('img')
        
        { pictures.length < 1 ? expect(img.alt).toContain("prev-slide")
            : expect(img.alt).not.toContain("prev-slide") }
    })
})