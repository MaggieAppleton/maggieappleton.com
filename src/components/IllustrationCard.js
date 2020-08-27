import React from 'react'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../lib/typography'

const IllustrationCard = props => {
  const theme = useTheme()

  return (
    <Link
      css={css`
        font-family: ${fonts.walsheimLight};
      `}
      to={`/${props.slug}`}
      aria-label={`View ${props.title}`}
    >
      <div
        key={props.id}
        css={css`
        margin: 0 auto;
          margin-bottom: 1em;
          max-width: 450px;
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
          .imgWrap {
            transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
          }
          &:hover {
            transform: scale(1.015);
            h3 {
              color: ${theme.colors.orange};
            }
            .imgWrap {
              box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);
            }
          }
        `}
      >
        <div className="imgWrap">
          <Img
            style={{
              borderRadius: '4px',
            }}
            fluid={props.fluid}
          />
        </div>
        <h3
          css={css`
            font-family: ${fonts.walsheimLight};
            font-size: ${rhythm(.7)};
            margin-top: 0.8em;
            margin-bottom: ${rhythm(0.3)};
            text-align: center;
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
          `}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  )
}

export default IllustrationCard
