import React from 'react'
import { css, keyframes } from '@emotion/core'
import mainImage from './interactiveillo/mainImage'
import linkImage from './interactiveillo/linkImage'

const APIs = () => {
  const strokeAnimation = keyframes`
  from, 0% {
    stroke-dashoffset: 1;
  }
  to, 100% {
    stroke-dashoffset: 20;
  }
  `

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 596 859"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-.026 -.51)">
        <image
          width="595.5"
          height="858"
          x=".526"
          y=".509"
          xlinkHref={mainImage}
        />
        <a
          href="https://developers.google.com/youtube/v3/"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            rect {
              transition: all 250ms ease;
              stroke-dasharray: 5;
              stroke-dashoffset: 1;
              animation: ${strokeAnimation} 5s linear infinite;
            }
            :hover {
              rect {
                fill: #fedbdd;
                transition: all 250ms ease;
              }
            }
          `}
        >
          <rect
            width="144.981"
            height="101.115"
            x="353.045"
            y="245.238"
            fill="#FFF"
            fillRule="nonzero"
            stroke="#FC5B59"
            strokeWidth="1"
            rx="4.007"
          />
          <image
            alt="An interactive image of an API"
            width="101.5"
            height="77"
            x="373.026"
            y="260.009"
            xlinkHref={linkImage}
          />
        </a>
      </g>
    </svg>
  )
}

export default APIs
