import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD, bpMinLG, bpMaxSM } from '../../lib/breakpoints'
import styled from '@emotion/styled'

export const Img = styled.img`
  max-width: 100%
`

export const BasicImage = props => {
  return (
    <div css={css({
      gridColumn: '1/4',
    })}>
    <img
      css={css({
        width: props.width || '100%',
        maxWidth: props.maxwidth || '880px',
        [bpMaxSM]: {
          maxWidth: '100%'
        },
        display: 'block',
        gridColumn: '1/4',
        margin: props.margin || '2rem auto 1.2rem',
        borderRadius: '6px',
      })} src={props.src} alt={props.alt} />
      {props.showalt && <p css={css({
        fontSize: '0.8rem',
        textAlign: 'center',
        maxWidth: '660px',
        opacity: '85%',
        lineHeight: '1.4rem',
        marginBottom: '1rem',
        marginTop: '1rem'
      })}>{props.alt}</p>}
      </div>
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
        margin: props.margin || '1rem auto',
        [bpMaxSM]: {
          flexDirection: 'column'
        },
        p: {
          minWidth: '30%',
          [bpMinLG]: {
              maxWidth: '500px',
              padding: '0 1rem',
          },
        },
        div: {
          maxWidth: props.divwidth || '500px',
          minWidth: '30%',
          padding: props.divpadding || '0 0.2rem',
        },
        img: {
          padding: props.imgpadding,
          margin: props.imgmargin || '0 auto',
          maxWidth: props.imgwidth,
          [bpMaxSM]: {
            maxWidth: '100%'
          }
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
        margin: props.margin || '1.6rem auto',
        img: {
          width: props.width || '100%',
          maxWidth: '100%',
          display: 'flex',
          alignSelf: 'center',
          margin: '0 auto',
          gridColumn: '1/4',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
          padding: '0',
          boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.2)',
        },
      })}
    >
      <BasicImage width={props.width} maxwidth={props.maxwidth} alt={props.alt} src={props.src} />
    </div>
  )
}

export const ImageGrid = props => {
  return (
      <div
        css={css({
          gridColumn: '1/4',
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          margin: '1.6rem auto 1rem',
          maxWidth: '880px',
          flexDirection: 'row',
          [bpMaxSM]: {
            flexDirection: 'column',
            img: {
              margin: '1% auto',
            }
          },
          img: {
            maxWidth: '48%',
            margin: '1%',
            height: 'auto',
            gridAutoFlow: 'row',
            justifySelf: 'center',
            gridColumn: 'auto'
          },
          a: {
            gridColumn: 'auto'
          },
          p: {
            margin: '0 auto',
          }
        })}
      >
        {props.children}
      </div>
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
        grid-column: 1 / 4;
        padding: ${props.padding ? props.padding : '2rem'};
        background: ${props.bgcolour};
        height: (100vw * 1.2);
        .innerDiv {
          display: flex;
          align-content: center;
          justify-content: center;
          padding: ${props.padding ? props.padding : '1rem 0 0rem'};
          img {
            padding: ${props.imgpadding ? props.imgpadding : '1rem'};
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
        padding: 2rem 0;
        background: ${props.bgcolour};
        .innerDiv {
          padding: 2rem 0 1rem;
          max-width: 80%;
          margin: 0 auto;
          display: grid;
          grid-gap: 1rem;
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
            padding-top: 2rem;
            color: white;
            line-height: 1.6rem;
            padding-left: 2rem;
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
    <div css={css({
      gridColumn: '1/4', justifyContent: 'center', margin: props.margin || '2rem auto 1rem'})}>
    <img
    css={css({
        width: props.width || '100%', margin: 0})}
      alt={props.alt}
      src={props.src}
    />
      {props.showalt && <p css={css({
        fontSize: '0.8em',
        textAlign: 'center',
        maxWidth: '660px',
        opacity: '85%',
        lineHeight: '1.4rem',
        marginBottom: '1rem',
        marginTop: '1rem'
      })}>{props.alt}</p>}
    </div>
  )
}
