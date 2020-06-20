import React from 'react'
import { css } from '@emotion/core'

const LinkCard = ({ title, link, author, ...props }) => {
  return (
    <a noTip href={link}>
      <div
        css={css({
          border: '1px solid rgba(52, 61, 68, 0.05)',
          transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
          margin: '0.4em',
          padding: '0 1em',
          width: '250px',
          borderRadius: '6px',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
          ':hover': {
            transform: 'scale(1.015)',
            borderRadius: '0px 0px 6px 6px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            p: {
              transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
            },
          },
        })}
        {...props}
      >
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </a>
  )
}

export default LinkCard
