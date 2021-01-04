import React, { useRef, useEffect }  from 'react'
import { css } from '@emotion/core'
// import { gsap }from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

// if (typeof window !== `undefined`) {
//     gsap.registerPlugin(ScrollTrigger)
//     gsap.core.globals("ScrollTrigger", ScrollTrigger)
//   }

export const StreamAnimation = () => {
 const triggerDiv = useRef(null)
 const box1 = useRef(null)
 const box2 = useRef(null)
 const box3 = useRef(null)
 const box4 = useRef(null)

//  useEffect(() => {
//     const timeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: [triggerDiv.current],
//             start: '-100px 50%',
//             end: '40px 30%',
//         },
        
//     })

//     timeline
//     .set([box1.current], {yPercent: -10, scaleY: '0.9'} )
//     .set([box2.current], {yPercent: -250, scaleY: '0.9'} )
//     .set([box3.current], {yPercent: -280, scaleY: '0.9'} )
//     .set([box4.current], {yPercent: -500, scaleY: '0.9'} )
//     .to([box1.current], {
//         'opacity': 1,
//         yPercent: 0, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 0.2)
//     .to([box1.current], {
//         yPercent: 50, scaleY: '1', ease: "sine.inOut"
//     }, 1)
//     .to([box2.current], {
//         'opacity': 1,
//         yPercent: -220, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 1)
//     .to([box1.current], {
//         yPercent: 140, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 1.5)
//     .to([box2.current], {
//         yPercent: -40, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 1.5)
//     .to([box3.current], {
//         'opacity': 1,
//         yPercent: -210, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 1.5)
//     .to([box1.current], {
//         yPercent: 185, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 2)
//     .to([box2.current], {
//         yPercent: 55, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 2)
//     .to([box3.current], {
//         yPercent: -140, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 2)
//     .to([box4.current], {
//         'opacity': 1,
//         yPercent: -400, scaleY: '1', ease: "sine.inOut", duration: '0.6'
//     }, 2)
// }, [])

  return (
    <div style={{ width: '50%', marginTop: '1em' }} ref={triggerDiv}>
        <img ref={box1} style={{ width: '380px', marginLeft: '1.6em' }} src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1609617065/maggieappleton.com/notes/garden-history/stream-2_shrink.png" /> 
        <img ref={box2} style={{ width: '380px', marginLeft: '1.6em' }} src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1609617065/maggieappleton.com/notes/garden-history/stream-3_shrink.png" />
        <img ref={box3} style={{ width: '380px', marginLeft: '1.6em' }} src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1609617065/maggieappleton.com/notes/garden-history/stream-4_shrink.png" />
        <img ref={box4} style={{ width: '380px', marginLeft: '1.6em' }} src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1609617065/maggieappleton.com/notes/garden-history/stream-1_shrink.png" />
    </div>
  )
}

