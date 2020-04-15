import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'

const BookPage = ({ data: { site } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>Books</h1>
        <p>Here's some books</p>
      </Container>
    </Layout>
  )
}

export default BookPage

export const bookPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
