import React from 'react'
import Layout from 'components/Layout'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import { bpMaxSM } from '../lib/breakpoints'
import { Book } from '../components/Book'
import { Link } from 'gatsby'

const LibraryPage = ({ data: { site, bookQuery, paperQuery } }) => {
  console.log(paperQuery.edges)

  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          h1 {
            margin-bottom: 0.4em;
            text-align: center;
          }
          p {
            margin-bottom: 0.8em;
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
        <h1>The Library</h1>
        <p>Books I've read. Accompanied by loose and opinionated notes.<br />To see books I haven't read, browse the <Link to='/antilibrary'>Anti Library</Link></p>
        {/* ------------ Books Section ------------ */}
        <section className="books">
          {bookQuery.edges.map(({ node: book }) => (
            <Book
              redirectTo={book.frontmatter.redirectTo}
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

export default LibraryPage

export const libraryPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    bookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
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
            slug
            author
            redirectTo
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

    paperQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "paper" }, published: { ne: false } }
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
            slug
            author
            redirectTo
          }
        }
      }
    }

    talkQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "talk" }, published: { ne: false } }
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
            slug
            author
            redirectTo
          }
        }
      }
    }

    podcastQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "podcast" }, published: { ne: false } }
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
            slug
            author
            redirectTo
          }
        }
      }
    }
  }
`
