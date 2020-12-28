import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { fonts } from '../../lib/typography'

const LinkCard = ({ title, link, author, children, ...props }) => {
  const theme = useTheme()

  return (
      <div
        css={css({
          border: '1px solid rgba(52, 61, 68, 0.05)',
          transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
          margin: '0.4em',
          padding: '2em',
          width: '400px',
          borderRadius: '6px',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
          p: {
            fontSize: '90%'
          },
          ':hover': {
            transform: 'scale(1.012)',
            borderRadius: '0px 0px 6px 6px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            h4: {
              transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
              color: `${theme.colors.orange}`
            },
          },
        })}
        {...props}
      >
        <a noTip href={link}><h4>{title}</h4>
        <h5>{author}</h5></a>
        <p>{children}</p>
      </div>
  )
}

export default LinkCard
