import React from 'react'
import { fonts } from '../lib/typography'
import { rhythm } from '../lib/typography'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import { useTheme } from 'components/Theming'
import paperOne from './paperOne.svg'
import paperTwo from './paperTwo.svg'

export const PaperCard = props => {
  const theme = useTheme()
  return (
      <Link to={ props.redirectTo ? `/${props.redirectTo}` : `/${props.slug}`}  aria-label={`View ${props.title}`}>
      <div
        key={props.id}
        css={css`
          display: flex;
          padding: 0;
          margin: 0.2em 1em 0.2em 1.4em;
          width: 480px;
          transition: all 250ms ease-in;
          &:hover {
            transform: scale(1.018);
            color: ${theme.colors.black};
          }
          ${bpMaxMD} {
            padding: 0.4em;
            margin: 0em 0.3em;
          }
          ${bpMaxSM} {
            width: 100%;
          }
          img {
            padding-right: 1.6em;
          }
          .details {
              display: block;
          }
            h4 {
              color: ${theme.colors.darkGrey};
            }
          }
        `}
      >
        {Math.floor(Math.random() * Math.floor(10))%2 == 0 ? <img alt='paper icon' src={paperOne} /> : <img alt='paper icon' src={paperTwo} /> }
        <div className="details">
        <h4
          css={css`
            font-family: ${fonts.regularSansBold};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            margin-top: 1em;
            margin-bottom: ${rhythm(0.2)};
            transition: all 700ms ease;
          `}
        >
          {props.title}
        </h4>
        <h6>{props.author}</h6>
        </div>
      </div>
    </Link>
  )
}