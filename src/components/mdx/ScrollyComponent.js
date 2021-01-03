import React, { useRef, useEffect, useState } from 'react'
// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { bpMaxSM } from '../../lib/breakpoints'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// Data

// const steps = [
//     {
//         headline: 'Things',
//         bodyText: 'In “Bullshit Jobs: A Theory” (2018), he wondered what happened to the 15-hour week that the economist John Maynard Keynes',
//         imgSrc: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/354/full/VueRouter.png'
//     },
//     {
//         headline: 'More Things',
//         bodyText: 'In 1930, had predicted would be possible by the end of the 20th century.',
//         imgSrc: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/354/full/VueRouter.png'
//     }
// ]

// Styling

export const Container = styled.div`
left: 50%;
margin-left: -50vw;
margin-right: -50vw;
max-width: 100vw;
position: relative;
right: 50%;
width: 100vw;
border: 1px solid red;
display: flex;
${bpMaxSM} {
    flex-direction: column;
};
`
export const Column = styled.div`
    flex: 50%;
    margin: 10em 1em;
    justify-content: center;
    align-content: space-around;
    border: 1px solid red;
    ${bpMaxSM} {
        margin: 1em;
    }
`

export const ScrollyComponent = () => {
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const secondTextRef = useRef(null)

    // const [currentStep, setCurrentStep] = useState(null)

    // const [images, setImages] = useState([])
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        // fetch images
        // setImages(images)
        // setLoading(false)
    }, [])

    useEffect(() => {
        // const updateStep = () => {
            // set current step to current steps.bodyText index + 1
        }
    )

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline.to([imageRef.current], {
            scrollTrigger: {
            trigger: [imageRef.current],
            start: 'top 50%',
            toggleActions: 'play pause reset reset'
           },
           opacity: 1,
        //    attr: {src: currentStep.imgSrc }
        }).to([textRef.current], {
            scrollTrigger: {
            trigger: [secondTextRef.current],
            start: 'top 50%',
            toggleActions: 'play pause reset reset'
           },
        //    text: currentStep.bodyText
        })
    }, [])
    
    // if (loading) { return <div></div> }

    return (

        <Container>
            <Column>
                {/* {steps.map((step, index) => {
                    <img key={index} style={{opacity: 0.2}} ref={imageRef} src={currentStep.imgSrc} id="scrollImage" />
                })}      */}
            </Column>
            <Column>
            {/* {steps.map((step, index) => {
                <p key={index} ref={textRef}>{currentStep.bodyText}</p>
                })}  */}
            </Column>
        </Container>
    )
}
