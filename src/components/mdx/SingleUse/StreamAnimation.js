import React, { useRef, useEffect }  from 'react'
import { css } from '@emotion/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

gsap.registerPlugin(ScrollTrigger)

export const StreamAnimation = () => {
 const triggerDiv = useRef(null)
 const box1 = useRef(null)
 const box2 = useRef(null)
 const box3 = useRef(null)
 const box4 = useRef(null)

 useEffect(() => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: [triggerDiv.current],
            markers: true,
            start: '-240% 50%',
            end: '-140% 30%',
            scrub: true
        },
        
    })

    timeline
    .set([box1.current], {yPercent: -10} )
    .set([box2.current], {yPercent: -200} )
    .set([box3.current], {yPercent: -300} )
    .set([box4.current], {yPercent: -420} )
    .to([box1.current], {
        'fill-opacity': 1,
        yPercent: 0, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 0.2)
    .to([box1.current], {
        yPercent: 120, scaleY: '1.1', ease: "sine.inOut"
    }, 1)
    .to([box2.current], {
        'fill-opacity': 1,
        yPercent: -110, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 1)
    .to([box1.current], {
        yPercent: 240, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box2.current], {
        yPercent: 10, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box3.current], {
        'fill-opacity': 1,
        yPercent: -220, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box1.current], {
        yPercent: 360, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box2.current], {
        yPercent: 130, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box3.current], {
        yPercent: -100, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box4.current], {
        'fill-opacity': 1,
        yPercent: -385, scaleY: '1.1', ease: "sine.inOut", duration: '0.6'
    }, 2)
}, [])

  return (
    <div style={{ width: '60%', marginTop: '2em' }} ref={triggerDiv}>
        <svg width="341" height="550" viewBox="0 0 341 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <rect ref={box1} width="341" height="105" fill="#C4C4C4"fill-opacity="0" />
        <rect ref={box2} y="119" width="341" height="105" fill="#C4C4C4" fill-opacity="0" />
        <rect ref={box3} y="238" width="341" height="105" fill="#C4C4C4" fill-opacity="0" />
        <rect ref={box4} y="415" width="341" height="105" fill="#C4C4C4"fill-opacity="0" />
        
        </svg>
    </div>
  )
}

