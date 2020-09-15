import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM, bpMaxSM } from '../../lib/breakpoints'
import styled from '@emotion/styled'

export const Image = styled.img`
  max-width: ${props => props.width ? props.width : '100%'};
  display: flex;
  align-self: center;
  margin: 0 auto;
  border-radius: 6px;
  margin-bottom: 1.2em;
  margin-top: 1.2em;
`

export const TwoCol = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { gridTemplateColumns: props.GridColCount || '1fr 1fr' },
        gridTemplateColumns: '1fr',
        display: 'grid',
        gridGap: props.gridGap || '20px',
        alignItems: props.alignItems || 'center',
        justifyItems: 'center',
        img: {
          padding: props.imgPadding,
          margin: props.imgMargin || '0px',
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
        gridGap: props.gridGap || '30px',
        padding: '20px 0px',
        img: {
          maxWidth: '100%',
          gridAutoFlow: 'row',
          padding: props.imgPadding || '6px',
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
        img: {
          width: props.width || '100%',
          marginBottom: '1.6em',
          marginTop: '1.6em',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
          padding: '0',
          boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.2)',
        },
      })}
    >
      <Image alt={props.alt} src={props.src} />
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
            justifySelf: 'center',
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
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
        padding: 2em 0;
        background: ${props.bgColor};
        height: (100vw * 1.2);
        .innerDiv {
          display: flex;
          align-content: center;
          justify-content: center;
          padding: 1em 0 0em;
          img {
            padding: 1em;
          }
        }
      `}
    >
      <div className="innerDiv">{props.children}</div>
    </div>
  )
}

export const FullWidth2Col = props => {
  return (
    <div
      css={css`
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
        height: (100vw * 1.2);
        padding: 2em 0;
        background: ${props.bgColor};
        .innerDiv {
          padding: 2em 0 1em;
          max-width: 80%;
          margin: 0 auto;
          display: grid;
          grid-gap: 1em;
          grid-template-columns: 2fr 1fr;
          ${bpMaxSM} {
            grid-template-columns: 1fr;
            p {
              margin-top: 0;
            }
            img {
            }
          }
          p {
            padding-top: 2em;
            color: white;
            line-height: 1.6em;
            padding-left: 2em;
          }
        }
      `}
    >
      <div className="innerDiv">{props.children}</div>
    </div>
  )
}

export const FullWidthImage = props => {
  return (
    <img
      css={css`
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
      `}
      alt={props.alt}
      src={props.src}
    />
  )
}
