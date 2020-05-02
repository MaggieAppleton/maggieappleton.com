import React from 'react'
import { animated, useTransition } from 'react-spring'

const SimpleTransition = ({ children, props }) => {
  const transitions = useTransition(children, props.path, {
    from: { transform: 'translate3d(0px,-15px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0px,0px,0)', opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 600 },
  })

  return (
    <div>
      {transitions.map(({ item: page, key, props }) => (
        <animated.div key={key} style={props}>
          {page}
        </animated.div>
      ))}
    </div>
  )
}

export default SimpleTransition
