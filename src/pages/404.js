import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const FailPage = () => {
  const data = useStaticQuery(graphql`
    query FailPageQuery {
      site {
        ...site
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
          justify-items: center;
          margin-top: 4em;
          max-width: 80%;
        `}
      >
        <h1>Page Not Found</h1>
        <h3>Sorry, that must have been a broken link.</h3>
        <Link to="/">Head back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export default FailPage
