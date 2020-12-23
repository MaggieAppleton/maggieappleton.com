import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM, bpMaxSM } from '../../lib/breakpoints'
import styled from '@emotion/styled'

export const Image = props => {
  return (
    <img
      css={css({
        width: props.width || '100%',
        maxWidth: props.maxwidth || '880px',
        gridColumn: '1/4',
        margin: '1.2em auto',
        borderRadius: '6px',
      })} src={props.src} alt={props.alt} />
      )
}


export const TwoCol = props => {
  return (
    <div
      css={css({
        gridColumn: '1/4',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: props.alignItems || 'center',
        justifyContent: 'center',
        maxWidth: props.maxwidth || '100vw',
        margin: '1em auto',
        p: {
          maxWidth: '500px',
          minWidth: '30%',
          padding: '0 1em'
        },
        div: {
          maxWidth: '500px',
          minWidth: '30%',
          padding: '0 0.2em'
        },
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '0 auto',
        [bpMinSM]: {
        },
        padding: '20px 0px',
        maxWidth: props.maxwidth || '100vw',
        gridColumn: '1/4',
        justifyContent: 'center',
        img: {
          maxWidth: props.imgWidth ||'100%',
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
        gridColumn: '1/4',
        margin: '0 auto',
        img: {
          width: props.width || '100%',
          maxWidth: '100%',
          display: 'flex',
          alignSelf: 'center',
          margin: '0 auto',
          marginBottom: '1.6em',
          marginTop: '1.6em',
          gridColumn: '1/4',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
          padding: '0',
          boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.2)',
        },
      })}
    >
      <Image width={props.width} maxwidth={props.maxwidth} alt={props.alt} src={props.src} />
    </div>
  )
}

export const ImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinMD]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          gridTemplateColumns: 'repeat(1, 1fr)',
          display: 'grid',
          width: '100%',
          margin: '0 auto',
          maxWidth: '880px',
          gridColumn: '1/4',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
            height: 'auto',
            gridAutoFlow: 'row',
            justifySelf: 'center',
            gridColumn: 'auto'
          },
          a: {
            gridColumn: 'auto'
          }
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
        width: 100%;
        grid-column: 1 / 4;
        padding: ${props.padding ? props.padding : '2em'};
        background: ${props.bgcolour};
        height: (100vw * 1.2);
        .innerDiv {
          display: flex;
          align-content: center;
          justify-content: center;
          padding: ${props.padding ? props.padding : '1em 0 0em'};
          img {
            padding: ${props.imgpadding ? props.imgpadding : '1em'};
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
    css={css({
        width: props.width || '100%',
        gridColumn: '1/4', justifyContent: 'center', margin: '1em auto'})}
      alt={props.alt}
      src={props.src}
    />
  )
}
