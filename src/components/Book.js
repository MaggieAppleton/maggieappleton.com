import React from 'react'
import { fonts } from '../lib/typography'
import { rhythm } from '../lib/typography'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import { useTheme } from 'components/Theming'

const Book = props => {
  const theme = useTheme()
  console.log(`author`, props.author)
  return (
    <Link to={props.redirectTo ? `/${props.redirectTo}` : `/${props.slug}`} aria-label={`View ${props.title}`}>
      <div
        key={props.id}
        css={css`
          padding: 0;
          margin-left: 1.6em;
          width: 260px;
          .gatsby-image-wrapper {
            border-radius: 4px;
            transition: all 500ms ease;
            -webkit-box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
            box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
            margin-bottom: 1em;
          }
          ${bpMaxMD} {
            padding: 0.4em;
            width: 200px;
            margin: 0em 0.3em;
          }
          ${bpMaxSM} {
            width: 360px;
          }
          &:hover {
            .gatsby-image-wrapper {
              transform: translateY(-4px) scale(1.02);
              -webkit-box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
              box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
            }
            h3 {
              color: ${theme.colors.black};
            }
          }
        `}
      >
        {props.fluidImg ? (
          <Img alt={props.title} fluid={props.fluidImg} />
        ) : (
            <img alt={props.title} src={props.src} />
          )}
        <h3
          css={css`
            font-family: ${fonts.walsheimLight};
            font-size: ${rhythm(.7)};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            margin-bottom: ${rhythm(0.2)};
            transition: all 700ms ease;
          `}
        >
          {props.title}
        </h3>
        <p
          css={css`
            color: ${theme.colors.grey};
            font-family: ${fonts.regularSans};
            font-size: ${rhythm(.6)};
            font-weight: 100;
        `}
        >
          By {props.author}
        </p>
      </div>
    </Link>
  )
}

export default Book
