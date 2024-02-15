import { describe, expect, it } from "vitest"
import user from '@testing-library/user-event'
import { fireEvent, render, screen } from "@testing-library/react"
import Slider from "../reusable/Slider"
import { act, renderHook } from "@testing-library/react-hooks"

describe("UI interaction", () => {

      it("", () => {
        const picture = [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
          ]

        const {result} = renderHook(() => Slider({picture: picture}))

       
      })

  
})