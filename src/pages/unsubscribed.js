import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <Container css={css`
    margin-top: 2rem;
         h1, p { text-align: center; } p {margin-top: 2rem; max-width: 400px;}
        `}>
      <h1>You successfully unsubscribed</h1>
      <p>All taken care of! You won't get any more updates from Maggie Appleton.</p>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`