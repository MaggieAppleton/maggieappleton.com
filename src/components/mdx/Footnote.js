import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

const Footnote = ({ count, children }) => {
  return (
    <>
      <span
        css={css`
          counter-increment: MarginNote;
          content: counter(MarginNote);
          vertical-align: super;
          line-height: 0;
          font-size: 70%;
        `}
      >
        {count}
      </span>
      <span
        css={css`
          position: relative;
          float: right;
          line-height: 1.4em;
          overflow: hidden;
          box-sizing: content-box;
          max-width: 240px;
          font-size: 75%;
          padding: 1em;
          right: -25%;
          margin-left: -20%;
          &::before {
            content: counter(MarginNote);
            width: 15px;
            height: 20px;
            position: absolute;
            left: -0.5em;
            text-align: right;
            top: 0.6rem;
          }
          &::after {
            clear: both;
            height: 0;
            width: 100%;
            content: '';
            display: block;
          }
          ${bpMaxSM} {
            display: none;
          }
        `}
      >
        {children}
      </span>
    </>
  )
}

export default Footnote
