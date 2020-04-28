import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'

export default () => {
  const theme = useTheme()
  return (
    <span>
      <Link to="./illustration" aria-label="View illustration page">
        Illustration Work
      </Link>
      <Link to="./notes" aria-label="View notes page">
        Notes & Research
      </Link>
      <Link to="./bookshelf" aria-label="View books page">
        Bookshelf
      </Link>

      <br />
      <Link to="./about" aria-label="View about page">
        About
      </Link>
      <Link
        to="./start"
        css={css`
          font-weight: bold;
          color: ${theme.colors.orange} !important;
        `}
        aria-label="View start here page"
      >
        Start Here
      </Link>
    </span>
  )
}
