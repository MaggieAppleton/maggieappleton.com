import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const GsapTest = () => {
  const purple = useRef(null);
  
    useEffect(() => {
        gsap.to([purple.current], {
            scrollTrigger: {
              trigger:  [purple.current],
              scrub: true
            },
            y: 200,
            x: 600,
          });
  }, []);

  return (
    <div>
        <h1 ref={purple}>Hello</h1>
        <h2>How are you?</h2>
    </div>
  );
}

