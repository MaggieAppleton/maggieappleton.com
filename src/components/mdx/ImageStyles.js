import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM } from '../../lib/breakpoints'

export const TwoCol = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { gridTemplateColumns: '50% 50%' },
        gridTemplateColumns: '1fr',
        display: 'grid',
        gridGap: '20px',
        img: {
          maxWidth: '100%',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const ThreeImageGrid = props => {
  return (
    <div
      css={css({
        [bpMinSM]: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        gridTemplateColumns: 'repeat(2, 1fr)',
        display: 'grid',
        gridGap: '30px',
        padding: '20px 0px',
        img: {
          maxWidth: '100%',
          gridAutoFlow: 'row',
          padding: '6px',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const ImageFrame = props => {
  return (
    <div
      css={css({
        marginBottom: '1.6em',
        marginTop: '1.6em',
        boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.1)',
        img: {
          maxWidth: '960px',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const ImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinSM]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          gridTemplateColumns: 'repeat(1, 1fr)',
          display: 'grid',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
            gridAutoFlow: 'row',
          },
        })}
      >
        {props.children}
      </div>
    </>
  )
}

export const FullWidth = props => {
  return (
    <div
      css={css`
        width: 500%;
        margin-left: -200%;
        background: ${props.bgColor};
        height: ${props.height};
        padding: 1em;
        p,
        img {
          justify-items: center;
          text-align: center;
        }
      `}
    >
      {props.children}
    </div>
  )
}
