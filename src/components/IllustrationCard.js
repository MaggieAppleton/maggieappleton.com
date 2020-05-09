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
      to={props.slug}
      aria-label={`View ${props.title}`}
    >
      <div
        key={props.id}
        css={css`
          margin-bottom: 40px;
          max-width: 450px;
        `}
      >
        <Img fluid={props.fluid} />
        <h4
          css={css`
            margin-top: 0.8em;
            margin-bottom: ${rhythm(0.3)};
            transition: all 150ms ease;
            text-align: center;
          `}
        >
          {props.title}
        </h4>
      </div>
    </Link>
  )
}

export default IllustrationCard
