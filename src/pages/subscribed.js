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
         h1, p { text-align: center; }
        `}>
      <h1>Success!</h1>
      <p >You're now subscribed to my weekly newsletter.<br />Now that's taken care of feel free to wander around <Link to="/garden">the garden</Link>, browse the <Link to="/library">library</Link>, or head back <Link to="/">home</Link>.</p>
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