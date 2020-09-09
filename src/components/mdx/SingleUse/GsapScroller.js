import React, { useRef, useEffect, useState } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import gsap from 'gsap'
import Subtitle from '../Subtitle'
import { Paragraph } from '../Paragraph'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const GsapScroller = () => {
    const imageRef = useRef(null)

    // const [images, setImages] = useState([])
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        // const imageURLs = [
        //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg',
        //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg',
        //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg',
        //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg'
        // ]

        // const loadImage = image => {
        //     return new Promise((resolve, reject) => {
        //     const loadImg = new Image()
        //       loadImg.src = image.url
        //       loadImg.onload = () => {
        //         console.log(image.url)
        //         setImages(image.url)
        //     }
      
        //       loadImg.onerror = err => reject(err)
        //     })
        //   }
      
        //   Promise.all(imageURLs.map(image => loadImage(image)))
        //     .then(() => setLoading(false))
        //     .catch(err => console.log("Failed to load images", err))

        // setLoading(true)
        // setImages(images)
        // setLoading(false)
    }, [])

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline.to([imageRef.current], {
            scrollTrigger: {
            trigger: '#triggerDiv',
            start: 'top top',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg' }
        }).to([imageRef.current], {
            scrollTrigger: {
            trigger: '#triggerDiv',
            start: '+=200',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg' }
        }).to([imageRef.current], {
            scrollTrigger: {
            trigger: '#triggerDiv',
            start: '+=400',
            toggleActions: 'play none reverse reset'
           },
           attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg' }
        })
    }, [])

        return (
            <div style={{ height: '1700px', margin: '1em 0 3em', position: 'relative' }} >
                <div id="triggerDiv" style={{ position: 'sticky', top: '0', paddingTop: '0.2em' }}>
                <Subtitle>Greensock in Plain English</Subtitle>
                <Paragraph>Greensock is a JavaScript library that changes DOM nodes directly. Once our browser has read the HTML document of a website, it transforms it into a set of DOM nodes - all our usual div's, paragraphs, and images. Greensock then manipulates those nodes to create our animations.</Paragraph>
                <img style={{ width: '100%', maxWidth: '550px', display: 'block', margin: '0.4em auto' }} ref={imageRef} alt="Greensock animation changes DOM nodes" src='https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg' />
                </div>
            </div>
        )
}
