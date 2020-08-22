import React from 'react'
import { css } from '@emotion/core'
// import { bpMaxLG, bpMaxMD } from '../../../lib/breakpoints'

// Make background of the main layout an image
const mainLayout = css`
left: 50%;
margin-left: -50vw;
margin-right: -50vw;
max-width: 100vw;
position: relative;
right: 50%;
width: 100vw;
height: 900px;
  background: offwhite;
  display: flex;
  z-index: -1;
  .innerLayout {
    position: sticky;
    top: 0;
    height: 50%;
    margin: 0 auto;
    padding: 2em 0;
    justify-content: center;
    align-content: center;
    display: inline-block;
    h1 {
        text-align: center;
        margin: 0.8em auto 0.3em;
    }
    p {
        max-width: 540px;
        line-height: 1.75;
        z-index: 1;
    }
  }
`

export const MMMSection = ({ sectionTitle, description, imageSrc, imageAlt }) => {
  return (
  <div css={mainLayout}>
      <div className='innerLayout'>
          <h1>{sectionTitle}</h1>
          <p>{description}</p>
        </div>
    </div>
  )
}
