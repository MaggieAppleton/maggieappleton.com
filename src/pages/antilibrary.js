import React from 'react'
import Layout from 'components/Layout'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import { bpMaxSM } from '../lib/breakpoints'
import { AntiBook } from '../components/Book'

const AntiLibraryPage = ({ data: { site, antibookQuery } }) => {
    console.log(antibookQuery)
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          h1, p {
            margin-bottom: 0.45em;
            text-align: center;
          }
          .books {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 auto;
            margin-top: 3em;
            ${bpMaxSM} {
              flex-direction: column;
            }
            img {
              border-radius: 4px;
            }
        `}
      >
        <h1>The Anti Library</h1>
        <p>Books I haven't read, but like the idea of having read.</p>
        <section className="books">
          {antibookQuery.edges.map(({ node: book }) => (
            <AntiBook
              url={book.frontmatter.url}
              slug={book.frontmatter.slug}
              title={book.frontmatter.title}
              key={book.id}
              fluidImg={book.frontmatter.cover.childImageSharp.fluid}
              author={book.frontmatter.author}
            />
          ))}
        </section>
      </Container>
    </Layout>
  )
}

export default AntiLibraryPage

export const antibookQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    antibookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "antibook" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 45
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            author
            url
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
