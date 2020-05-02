import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import { bpMaxSM } from '../lib/breakpoints'

const BookPage = ({ data: { site, bookQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .books {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            ${bpMaxSM} {
              flex-direction: column;
            }
            img {
              border-radius: 4px;
            }
          }
        `}
      >
        <h1>The Bookshelf</h1>
        {/* ------------ Books Section ------------ */}
        <section className="books">
          {bookQuery.edges.map(({ node: book }) => (
            <Link
              css={css`
                font-family: ${fonts.walsheimLight};
              `}
              to={book.frontmatter.slug}
              aria-label={`View ${book.frontmatter.title}`}
            >
              <div
                key={book.id}
                css={css`
                  padding: 0.8em;
                  margin-bottom: 1em;
                  width: 300px;
                  max-width: 240px;
                `}
              >
                <Img fluid={book.frontmatter.cover.childImageSharp.fluid} />
                <h4
                  css={css({
                    marginBottom: rhythm(0.1),
                    transition: 'all 150ms ease',
                    ':hover': {
                      color: theme.colors.primary,
                    },
                  })}
                >
                  {book.frontmatter.title}
                </h4>
              </div>
            </Link>
          ))}
        </section>
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
    bookQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 18
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
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
