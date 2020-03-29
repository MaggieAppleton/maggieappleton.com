import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

const StartPage = ({ data: { site } }) => {
  const theme = useTheme()
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

export const startQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
