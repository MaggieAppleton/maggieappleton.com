import React, { useRef, useEffect, useState } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import gsap from 'gsap'
import Subtitle from '../Subtitle'
import { Paragraph } from '../Paragraph'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bpMinXL, bpMaxSM } from '../../../lib/breakpoints'

gsap.registerPlugin(ScrollTrigger);

export const BlenderScroller = () => {
    const imageRef = useRef(null)

    // useEffect(() => {
    //     const timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#triggerDiv',
    //             start: 'top 50%',
    //             scrub: true
    //            },
    //     })

    //     timeline.to([imageRef.current], {
    //        attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg' }
    //     }).to([imageRef.current], {
    //        attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg' }
    //     }).to([imageRef.current], {
    //        attr: {src: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg' }
    //     })
    // }, [])

    const Container = styled.div`
    height: 1700px;
   margin: 1em 0 3em;
   position: relative;
   ${bpMaxSM} {
       position: relative;
       height: auto;
   }
    `

    const TriggerDiv = styled.div`
    position: sticky;
    top: 0;
    padding-top: 2em;
    display: flex;
    justify-content: center;
    align-content: center;
    max-width: 100%;
    flex-direction: column;
    z-index: -1;
    `

     const ImageWrapper = styled.div`
        left: 50%;
        margin-left: -35vw;
        margin-right: -35vw;
        max-width: 70vw;
        position: relative;
        right: 50%;
        height: 1200px;
        display: block;
     `

     const Image = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        z-index: -2;
        box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.2em;
     `

     const ScrollText = styled.p`
        padding: 1em;
        background: white;
        z-index: 1;
     `

        return (
            <Container>
                <TriggerDiv id="triggerDiv">
                    <ImageWrapper>
                    <Image alt="Guide the the blender user interface" src='https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600206616/maggieappleton.com/notes/dirty-perspective/Screenshot_-_2020-09-15_22.49.17.png' />
                    <svg>
                        <rect fill="green" width="100px" height="100px" x="20" y="50" />
                    </svg>
                    </ImageWrapper>
                </TriggerDiv>
                <ScrollText>Hello</ScrollText>
                <ScrollText>We are scrolling</ScrollText>
                <ScrollText>Down the page</ScrollText>
            </Container>
        )
}
