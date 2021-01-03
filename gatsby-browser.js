import React from 'react'
import SimpleTransition from './src/components/Transition'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
}

export const wrapPageElement = ({ element, props }) => {
  return <SimpleTransition props={props}>{element}</SimpleTransition>
}


  // return <script src="https://hypothes.is/embed.js" async></script>
