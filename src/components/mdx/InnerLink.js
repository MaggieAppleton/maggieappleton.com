import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'
import React from 'react'
import { useTheme } from '../Theming'

const InnerLink = props => {
  const theme = useTheme()
  return (
    <GatsbyLink
      css={css({
        display: 'inline-block',
        color: `${theme.colors.orange}`,
        borderRadius: '4px',
        lineHeight: '1em',
        transition: 'all 0.6s ease',
        ':hover, :focus': {
          background: `${theme.colors.lightOrange}`,
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
