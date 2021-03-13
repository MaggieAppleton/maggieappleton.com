import React from 'react'
import { css } from '@emotion/core'
import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

const mainLayout = css`
  grid-column: 1/4;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 1.4em auto;
  img {
    transition: all 400ms ease;
    max-width: 120px;
    &:hover {
      transition: all 400ms ease;
      transform: translateY(-6px);
    }
  }
  h5 {
    transition: all 400ms ease;
    text-align: center;
    align-self: center;
    margin-top: 0.4em;
    font-size: 1em;
  }
  ${bpMaxMD} {
    flex-wrap: wrap;
  }
`

const largeImages = css`
  ${bpMaxLG} {
    flex-wrap: wrap;
  }
  img {
    max-width: 400px;
  }
`

export const Tools = ({ children }) => {
  return <div css={mainLayout}>{children}</div>
}

export const Hardware = ({ children }) => {
  return <div css={[mainLayout, largeImages]}>{children}</div>
}
