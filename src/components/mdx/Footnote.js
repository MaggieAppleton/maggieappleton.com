import React from 'react'
import { css } from '@emotion/core'

const Footnote = ({ children }) => {
  return (
    <span
      css={css`
        position: relative;
        float: right;
        overflow: hidden;
        box-sizing: content-box;
        max-width: 240px;
        font-size: 75%;
        padding: 0.6em;
        right: -10%;
        margin-left: -10%;
        &::after {
          clear: both;
          height: 0;
          width: 100%;
          content: '';
          display: block;
        }
      `}
    >
      {children}
    </span>
  )
}

export default Footnote
