import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const PreviousNext = props => {
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
        }
        .left {
          color: red;
          max-width: 200px;
        }
        .right {
          text-align: right;
          justify-self: flex-end;
          max-width: 200px;
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
