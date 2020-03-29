import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { useTheme } from '../Theming'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="#" aria-label="View Notes page">
        Start Here
      </Link>
      <Link to="#" aria-label="View about page">
        About
      </Link>
      <Link to="#" aria-label="View contact page">
        Contact
      </Link>
    </React.Fragment>
  )
}
