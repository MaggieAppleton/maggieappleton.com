import React from 'react'
import { css } from '@emotion/core'
import SimpleCard from '../SimpleCard'

export const ResearchBlock = ({ children }) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 660px;
        opacity: 80%;
        margin-top: 3em;
        line-height: 1.5em;
        border-top: 1px solid lightgrey;
        h4 {
          font-size: 110%;
        }
      `}
    >
      <h4>References & Research</h4>
      <div
        css={css`
          display: grid;
          grip-gap: 1em;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        `}
      >
        {children}
      </div>
    </div>
  )
}

export const ResearchItem = ({ children, title, link, author }) => {
  return (
    <SimpleCard maxWidth="760px" margintop="0em" marginbottom="0em"
      css={css`
          font-size: 90%;
          margin: 0.4em;
          p {
            line-height: 1.5em;
            padding: 0em 0.4em 0.4em 0.6em;
          }
          h6 {
            padding: 0 0 1.4em 0.4em;
            margin: 0;
            margin-left: 1.2em;
            max-width: 400px;
            a {
              
            }
          }
        `}
    >
      <p>{children}</p>
      <h6><a href={link}>{title}</a>  –  {author}</h6>
    </SimpleCard>
  )
}
