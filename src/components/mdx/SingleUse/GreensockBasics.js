import React, { useRef, useEffect } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { gsap }from 'gsap'
import Subtitle from '../Subtitle'
import { Paragraph } from '../Paragraph'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bpMinMD, bpMinSM, bpMaxMD } from '../../../lib/breakpoints'

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export const GsapScroller = () => {
  const pinDiv = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)

  useEffect(() => {
      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: [pinDiv.current],
              start: 'top top',
              end: '+=800px',
              scrub: 1,
          },
      })

      timeline
      .to([img2.current], {
          opacity: 1
      })
      .to([img3.current], {
          opacity: 1
      })
      .to([img4.current], {
          opacity: 1
      })
  }, [])

  const Container = styled.div`
    height: 2000px;
    margin: 1em 0;
    position: static;
    display: block;
    ${bpMaxMD} {
      height: auto;
      margin: 1em 0 3em;
    }
  `

  const TriggerDiv = styled.div`
    position: sticky;
    padding-top: 0.2em;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 0;
    height: auto;
    margin-bottom: 600px;
    ${bpMaxMD} {
      position: relative;
    }
  `

  return (
    <Container>
      <TriggerDiv ref={pinDiv}>
        <div>
          <Subtitle>Greensock in Plain English</Subtitle>
          <Paragraph>
            Greensock is a JavaScript library that changes DOM nodes directly.
            Once our browser has read the HTML document of a website, it
            transforms it into a set of DOM nodes - all our usual div's,
            paragraphs, and images. Greensock then manipulates those nodes to
            create our animations.
          </Paragraph>
        </div>
        <img
          style={{
            width: '100%',
            maxWidth: '580px',
            margin: '0.4em auto',
            position: 'absolute',
            display: 'inline-block',
            left: 0,
            right: 0,
            top: '320px',
            zIndex: 1,
            'bpMaxMD': {
              position: 'relative',
              top: 0,
              margin: '1em'
            }
          }}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg"
        />
        <img
          ref={img2}
          style={{
            width: '100%',
            maxWidth: '580px',
            margin: '0.4em auto',
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: 0,
            top: '320px',
            zIndex: 2,
          }}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg"
        />
        <img
          ref={img3}
          style={{
            width: '100%',
            maxWidth: '580px',
            margin: '0.4em auto',
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: 0,
            top: '320px',
            zIndex: 3,
          }}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg"
        />
        <img
          ref={img4}
          style={{
            width: '100%',
            maxWidth: '580px',
            margin: '0.4em auto',
            position: 'absolute',
            left: 0,
            right: 0,
            opacity: 0,
            top: '320px',
            zIndex: 4,
          }}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg"
        />
      </TriggerDiv>
    </Container>
  )
}

export const TweenRedBigBox = () => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.to([boxRef.current], {
            scrollTrigger: {
                trigger: [boxRef.current],
                start: 'top 70%',
                end: 'bottom 15%',
                scrub: true
            },
            x: '+=400px',
            scale: 1.4,
            background: '#E73C67',
        })
    })

    return (
        <div ref={boxRef} style={{ width: '100px', height: '100px', background: '#2D2A55', borderRadius: '4px', margin: '2em' }} />
    )
  }


  export const TweenSpinningBox = () => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.to([boxRef.current], {
            scrollTrigger: {
                trigger: [boxRef.current],
                start: 'top 70%',
                end: 'bottom 15%',
                scrub: true
            },
            x: "+=400",
            rotation: 360
        })
    })

    return (
        <div ref={boxRef} style={{ width: '100px', height: '100px', background: '#2D2A55', borderRadius: '4px', margin: '2em' }} />
    )
}

export const TweenReverseSpinningBox = () => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.from([boxRef.current], {
            scrollTrigger: {
                trigger: [boxRef.current],
                start: 'top 70%',
                end: 'bottom 15%',
                scrub: true
            },
            x: "+=400",
            rotation: 360
        })
    })

    return (
        <div ref={boxRef} style={{ width: '100px', height: '100px', background: '#2D2A55', borderRadius: '4px', margin: '2em' }} />
    )
}

export const TweenBlueRedBox = () => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.fromTo([boxRef.current], {
            background: '#D93654'
        }, { 
            scrollTrigger: {
                trigger: [boxRef.current],
                start: 'top 70%',
                end: 'bottom 15%',
                scrub: true
            }, background: '#93D0D9' })
    })

    return (
        <div ref={boxRef} style={{ width: '100px', height: '100px', margin: '0 auto', borderRadius: '4px' }} />
    )
}
