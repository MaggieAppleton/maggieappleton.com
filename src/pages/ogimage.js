import React from 'react'
import { graphql } from 'gatsby'
import OgImage from '../components/OgImage'

const OgImagePage = ({ data: { site } }) => {
  return (
        <div className="headerText">
            <OgImage />
        </div>
  )
}

export default OgImagePage

export const ogImagePageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
