import React, { useRef, useEffect, useState } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const GsapScroller = () => {
    const imageRef = useRef(null)

    // const [images, setImages] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        // fetch images
        // setImages(images)
        // setLoading(false)
    }, [])

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline.to([imageRef.current], {
            scrollTrigger: {
            trigger: [imageRef.current],
            start: 'top 35%',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg' }
        }).to([imageRef.current], {
            scrollTrigger: {
            trigger: [imageRef.current],
            start: 'top 15%',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg' }
        }).to([imageRef.current], {
            scrollTrigger: {
            trigger: [imageRef.current],
            start: 'top 2%',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg' }
        })
    }, [])
    
    // if (loading) { return <div></div> }

    return (
            <img style={{ maxWidth: '600px', display: 'block', margin: '0 auto', paddingTop: '26px' }} ref={imageRef} alt="Greensock animation changes DOM nodes" src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg" />
    )
}
