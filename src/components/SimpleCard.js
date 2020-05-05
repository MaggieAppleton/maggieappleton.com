import React from 'react'
import { css } from '@emotion/core'

const SimpleCard = props => {
  return (
    <div
      css={css({
        border: '1px solid rgba(52, 61, 68, 0.05)',
        transition: props.hover
          ? 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;'
          : null,
        margin: '0 auto',
        marginBottom: '2em',
        padding: '1.4em 1em 2em',
        borderRadius: '6px',
        boxShadow: props.hover
          ? '0px 1px 2px rgba(52, 61, 68, 0.1)'
          : '0 4px 10px -4px rgba(0,0,0,0.15)',
        ':hover': {
          boxShadow: props.hover ? '0 10px 30px -10px rgba(0,0,0,0.15)' : null,
          p: {
            transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
          },
        },
      })}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default SimpleCard
