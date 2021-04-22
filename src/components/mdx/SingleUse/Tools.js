import React from 'react'
import { css } from '@emotion/core'
import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

const mainLayout = css`
  grid-column: 1/4;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 1.8em auto 0;
  a {
    max-width: 200px;
  }
  img {
    transition: all 400ms ease;
    max-width: 120px;
    margin-bottom: 0;
    &:hover {
      transition: all 400ms ease;
      transform: translateY(-6px);
    }
  }
  h5 {
    transition: all 400ms ease;
    text-align: center;
    font-size: 1em;
    max-width: 200px;
    min-width: 200px;
    margin-bottom: 1.6em;
  }
  ${bpMaxMD} {
    flex-wrap: wrap;
  }
`

const largeImages = css`
  ${bpMaxLG} {
    flex-wrap: wrap;
  }
  a {
    max-width: 400px;
  }
  img {
    max-width: 400px;
    padding: 0 1em;

  }
  h5 {
    max-width: 400px;
    min-width: 400px;
  }
`

export const Tools = ({ children }) => {
  return <div css={mainLayout}>{children}</div>
}

export const Hardware = ({ children }) => {
  return <div css={[mainLayout, largeImages]}>{children}</div>
}
