import React from 'react'
import { css } from '@emotion/core'
import { bpMaxMD } from '../../lib/breakpoints'

const Footnote = ({ count, children }) => {
  return (
    <>
      <span
        css={css`
          vertical-align: super;
          line-height: 0;
          font-size: 80%;
          padding-right: 0.2em;
        `}
      >
        {count}
      </span>
      <aside
        css={css`
          position: relative;
          float: right;
          line-height: 1.4em;
          overflow: hidden;
          box-sizing: content-box;
          opacity: 75%;
          max-width: 240px;
          font-size: 75%;
          padding: 1.4em 1em;
          right: -30%;
          margin-left: -26%;
          &::before {
            content: '${count}';
            width: 15px;
            height: 20px;
            position: absolute;
            left: -0.5em;
            text-align: right;
            top: 0.8rem;
          }
          &::after {
            clear: both;
            height: 0;
            width: 100%;
            content: '';
            display: block;
          }
          ${bpMaxMD} {
            display: none;
          }
        `}
      >
        {children}
      </aside>
    </>
  )
}

export default Footnote
