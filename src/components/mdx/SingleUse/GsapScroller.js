import React, { useRef, useEffect, useState } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import gsap from 'gsap'
import Subtitle from '../Subtitle'
import { Paragraph } from '../Paragraph'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bpMinMD, bpMinSM, bpMaxSM } from '../../../lib/breakpoints'

gsap.registerPlugin(ScrollTrigger)

export const GsapScroller = () => {
  const pinDiv = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)

  useEffect(() => {
      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: [pinDiv.current],
              start: 'top -5%',
              end: '+=420px',
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
    height: 1500px;
    margin: 1em 0 3em;
    position: relative;
    ${bpMaxSM} {
      height: 100vh;
    }
  `

  const TriggerDiv = styled.div`
    position: sticky;
    padding-top: 0.2em;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 0;
    height: 100vh;
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
            maxHeight: '80vh',
            margin: '0.4em auto',
            position: 'absolute',
            left: 0,
            right: 0,
            top: '320px',
            zIndex: 1,
            
          }}
          alt="Greensock animation changes DOM nodes"
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg"
        />
        <img
          ref={img2}
          style={{
            width: '100%',
            maxWidth: '580px',
            maxHeight: '80vh',
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
