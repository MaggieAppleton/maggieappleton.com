import React from 'react'
import { css } from '@emotion/core'
// import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

// Make background of the main layout an image
const mainLayout = css`
  display: flex;
  .innerLayout {
    margin: 0 auto;
    padding: 2em 0;
    justify-content: center;
    align-content: center;
    display: inline-block;
    h1 {
        text-align: center;
        margin: 0.6em auto 0.4em;
    }
    p {
        max-width: 550px;
        line-height: 1.75;
        z-index: 1;
    }
  }
`

export const MediumMaterialsMeatSection = ({ sectionTitle, children }) => {
  return (
  <div css={mainLayout}>
      <div className='innerLayout'>
          <h1>{sectionTitle}</h1>
          {children}
        </div>
    </div>
  )
}
