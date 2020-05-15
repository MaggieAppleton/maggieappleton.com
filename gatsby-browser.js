import React from 'react'
import SimpleTransition from './src/components/Transition'

export const wrapPageElement = ({ element, props }) => {
  return <SimpleTransition props={props}>{element}</SimpleTransition>
}

//   return <script src="https://hypothes.is/embed.js" async></script>
