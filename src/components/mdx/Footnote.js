import React from 'react'
import { css } from '@emotion/core'

const Footnote = ({ children }) => {
  return (
    <p
      css={css`
        position: relative;
        max-width: 240px;
        font-size: 80%;
        padding: 0.6em 0;
        float: right;
        top: 0;
        right: -2em;
        z-index: 1;
      `}
    >
      {children}
    </p>
  )
}

export default Footnote
