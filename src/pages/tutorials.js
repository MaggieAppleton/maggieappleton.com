import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

const TutorialPage = ({ data: { site } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>Tutorials</h1>
        <p>You just hit a route that doesn't exist</p>
      </Container>
    </Layout>
  )
}

export default TutorialPage

export const tutorialsQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
