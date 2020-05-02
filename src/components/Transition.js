import React from 'react'
import { animated, useTransition } from 'react-spring'

const SimpleTransition = ({ children, props }) => {
  const transitions = useTransition(children, props.path, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {transitions.map(({ item: page, key, props }) => (
        <animated.div key={key} style={props}>
          {page}
        </animated.div>
      ))}
    </div>
  )
}

export default SimpleTransition
