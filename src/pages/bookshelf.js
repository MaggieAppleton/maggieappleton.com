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
          h1 {
            margin-bottom: 1em;
            text-align: center;
          }
          .books {
            display: flex;
            margin: 0 auto;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            ${bpMaxSM} {
              flex-direction: column;
            }
            img {
              border-radius: 4px;
            }
        `}
      >
        <h1>The Bookshelf</h1>
        {/* ------------ Books Section ------------ */}
        <section className="books">
          {bookQuery.edges.map(({ node: book }) => (
            <Link
              to={book.frontmatter.slug}
              aria-label={`View ${book.frontmatter.title}`}
            >
              <div
                key={book.id}
                css={css`
                  padding-right: 2.2em;
                  margin-bottom: 2em;
                  width: 340px;
                  max-width: 240px;
                  .gatsby-image-wrapper {
                    transition: all 500ms ease;
                    -webkit-box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
                    box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
                  }
                  &:hover {
                    .gatsby-image-wrapper {
                      transform: translateY(-4px) scale(1.02);
                      -webkit-box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
                      box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
                    }
                    h4 {
                      color: ${theme.colors.black};
                    }
                  }
                `}
              >
                <Img fluid={book.frontmatter.cover.childImageSharp.fluid} />
                <h4
                  css={css`
                    font-family: ${fonts.regularSansBold};
                    color: ${theme.colors.darkGrey};
                    font-weight: 200;
                    margin-top: 1em;
                    margin-bottom: ${rhythm(0.2)};
                    transition: all 700ms ease;
                  `}
                >
                  {book.frontmatter.title}
                </h4>
                <h6>{book.frontmatter.author}</h6>
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
            author
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
