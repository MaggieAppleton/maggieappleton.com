import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
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
        <a href="/">Head back to the homepage</a>
      </Container>
    </Layout>
  )
}

export default FailPage
