import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import React from 'react'

const InnerLink = props => {
  return (
    <GatsbyLink
      css={css({
        display: 'inline-block',
        color: '#ed7842',
        borderRadius: '4px',
        lineHeight: '1em',
        transition: 'all 0.6s ease',
        ':hover, :focus': {
          background: '#ed7842',
          color: 'white',
          padding: '6px',
        },
      })}
      to={props.to}
    >
      {props.children}
    </GatsbyLink>
  )
}

export default InnerLink
