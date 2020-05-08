import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import Container from 'components/Container'

const StartPage = ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container>
        <h1>Start Here</h1>
        <p>You just hit a route that doesn't exist</p>
      </Container>
    </Layout>
  )
}

export default StartPage

export const startPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
