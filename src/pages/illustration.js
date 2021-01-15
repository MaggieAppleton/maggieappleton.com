import React from 'react'
import Layout from 'components/Layout'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import IllustrationCard from '../components/IllustrationCard'

const IllustrationPage = ({ data: { site, illustrationQuery } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .illustrationGrid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1em;
            margin-top: 3em;
          }
        `}
      >
        <section className="header">
          <h1>Illustration Projects</h1>
          <p>A small selection of illustration projects I've worked on</p>
        </section>
        <section>
          <div className="illustrationGrid">
            {illustrationQuery.edges.map(({ node: illustration }) => (
              <IllustrationCard
                slug={illustration.frontmatter.slug}
                title={illustration.frontmatter.title}
                id={illustration.id}
                fluid={illustration.frontmatter.cover.childImageSharp.fluid}
              />
            ))}
          </div>
        </section>
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
    illustrationQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "illustration" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 9
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
