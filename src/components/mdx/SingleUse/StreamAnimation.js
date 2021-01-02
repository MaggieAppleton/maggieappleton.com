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
            start: '-160% 50%',
            end: '-120% 30%',
            scrub: true
        },
        
    })

    timeline
    .set([box1.current], {yPercent: -10, scaleY: '0.9'} )
    .set([box2.current], {yPercent: -250, scaleY: '0.9'} )
    .set([box3.current], {yPercent: -280, scaleY: '0.9'} )
    .set([box4.current], {yPercent: -500, scaleY: '0.9'} )
    .to([box1.current], {
        'opacity': 1,
        yPercent: 0, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 0.2)
    .to([box1.current], {
        yPercent: 50, scaleY: '1', ease: "sine.inOut"
    }, 1)
    .to([box2.current], {
        'opacity': 1,
        yPercent: -220, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 1)
    .to([box1.current], {
        yPercent: 140, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box2.current], {
        yPercent: -40, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box3.current], {
        'opacity': 1,
        yPercent: -210, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 1.5)
    .to([box1.current], {
        yPercent: 185, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box2.current], {
        yPercent: 55, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box3.current], {
        yPercent: -140, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 2)
    .to([box4.current], {
        'opacity': 1,
        yPercent: -400, scaleY: '1', ease: "sine.inOut", duration: '0.6'
    }, 2)
}, [])

  return (
    <div style={{ width: '50%', marginTop: '2em' }} ref={triggerDiv}>
        <img ref={box1} style={{ width: '380px', opacity: 0, marginLeft: '1.6em' }} src="https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/jkuY60LB/0c1dcf6f-54f5-4d9c-8b6e-cea3017937bb.png?v=ded327201ef4b1d10fbb6cff503e87c6" /> 
        <img ref={box2} style={{ width: '380px', opacity: 0, marginLeft: '1.6em' }} src="https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/z8u4dR62/68162d5c-0a24-479e-ada0-cae029615490.png?v=b8678ad3391a4af8060829459e107535" />
        <img ref={box3} style={{ width: '380px', opacity: 0, marginLeft: '1.6em' }} src="https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/L1uO8Ed1/412abcee-b76a-45c6-a143-51e90f98cdcd.png?v=075b0c0a918a1ee29506d223f4e728d7" />
        <img ref={box4} style={{ width: '380px', opacity: 0, marginLeft: '1.6em' }} src="https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/NQuK59wn/e843e1c7-1733-4937-9e43-3029600b9e84.png?v=dd36eb42d6ab9b71425d1feea96907fc" />
        {/* <svg width="341" height="550" viewBox="0 0 341 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <rect ref={box1} width="341" height="105" fill="#C4C4C4"fill-opacity="0" />
        <rect ref={box2} y="119" width="341" height="105" fill="#C4C4C4" fill-opacity="0" />
        <rect ref={box3} y="238" width="341" height="105" fill="#C4C4C4" fill-opacity="0" />
        <rect ref={box4} y="415" width="341" height="105" fill="#C4C4C4"fill-opacity="0" />
        
        </svg> */}
    </div>
  )
}

