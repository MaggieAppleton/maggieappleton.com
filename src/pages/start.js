import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import Container from 'components/Container'

const StartPage = ({ data: { site } }) => {
  return (
    <Layout site={site}>
      <Container>
        <div className="headerText">
            <h1>Start Here</h1>
            </div>
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
