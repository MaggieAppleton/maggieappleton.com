import React from 'react'
import ReactDOM from 'react-dom'
import SimpleTransition from './src/components/Transition'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals('ScrollTrigger', ScrollTrigger)
}

export const wrapPageElement = ({element, props}) => {
  return <SimpleTransition props={props}>{element}</SimpleTransition>
}

// https://github.com/gatsbyjs/gatsby/issues/8560#issuecomment-535265414
// https://github.com/gatsbyjs/gatsby/discussions/17914
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}

// return <script src="https://hypothes.is/embed.js" async></script>
