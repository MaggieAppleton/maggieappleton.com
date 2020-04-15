import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

const IllustrationPage = ({ data: { site } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>Illustrations</h1>
        <p>Here's some illustrations</p>
      </Container>
    </Layout>
  )
}

export default IllustrationPage

export const illustrationPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
