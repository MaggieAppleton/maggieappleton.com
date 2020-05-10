import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { fonts } from '../lib/typography'

const PreviousNext = props => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 2em;
        margin-top: 4em;
        max-width: 660px;
        h4 {
          font-family: ${fonts.walsheimLight};
          transition: 600ms ease;
        }
        .left {
          max-width: 200px;
          transition: 600ms ease;
          &:hover {
            color: ${theme.colors.orange};
          }
        }
        .right {
          text-align: right;
          transition: 600ms ease;
          justify-self: flex-end;
          max-width: 200px;
          &:hover {
            color: ${theme.colors.orange};
          }
        }
      `}
    >
      {props.prevSlug && (
        <Link to={`/${props.prevSlug}`} aria-label="View previous page">
          <h4 className="left">{props.prevTitle}</h4>
        </Link>
      )}
      {props.nextSlug && (
        <Link to={`/${props.nextSlug}`} aria-label="View next page">
          <h4 className="right">{props.nextTitle}</h4>
        </Link>
      )}
    </div>
  )
}

export default PreviousNext
