import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import Link from 'components/Link'
import Img from 'gatsby-image'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxMD } from '../lib/breakpoints'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.black};
      `}
    >
      <Container>
        <h1
          css={css`
            color: ${theme.colors.black};
            position: relative;
            z-index: 5;
            font-family: ${fonts.walsheim};
            font-weight: 100;
            font-size: ${rhythm(2.2)};
            line-height: ${rhythm(2.2)};
            margin-top: 3vw;
            max-width: ${rhythm(18)};
          `}
        >
          Maggie Appleton
        </h1>
        <h2
          css={css`
            font-family: ${fonts.cardo};
            font-weight: 200;
            font-size: ${rhythm(1.1)};
            line-height: ${rhythm(1.4)};
            max-width: 600px;
          `}
        >
          Makes illustrations that help explain the world of technology and
          programming.
        </h2>
        <h4
          css={css`
            font-family: ${fonts.walsheimLight};
            margin-bottom: 3vw;
          `}
        >
          Art Director & Lead Illustrator at Egghead.io
        </h4>
      </Container>
    </section>
  )
}

// ------- // Main Section // ---------- //

export default function Index({
  data: { site, bookQuery, illustrationQuery, notesQuery },
}) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          padding-top: 0;
          display: grid;
          grid-gap: 2.2em;
          grid-template-columns: 2fr 5fr;
          ${bpMaxMD} {
            grid-template-columns: 100%;
          }
          h2,
          h3,
          h4 {
            margin-top: 0;
          }
          .illustration {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 1em;
          }
          .books {
            margin-top: 3em;
            border-right: 1px solid ${theme.colors.lightgrey};
            padding-right: 2em;
          }
          .notes {
            border-right: 1px solid ${theme.colors.lightgrey};
            padding-right: 2em;
          }
          button {
            width: 100%;
            max-width: 240px;
            margin-bottom: 20px;
          }
        `}
      >
        <section>
          {/* ------------ Notes Section ------------ */}
          <section className="notes">
            {/* <button>Start Here</button> */}
            <Link to="./notes">
              <h3>
                <span>🌱</span> The Digital Garden
              </h3>
            </Link>
            <p>
              An open collection of notes, research, sketches, and thoughts.{' '}
              <br />
              Carefully tended over time.
            </p>
            {notesQuery.edges.map(({ node: note }) => (
              <div
                key={note.id}
                css={css`
                  margin-bottom: 1em;
                `}
              >
                <h4
                  css={css({
                    marginBottom: rhythm(0.1),
                    transition: 'all 150ms ease',
                    ':hover': {
                      color: theme.colors.primary,
                    },
                  })}
                >
                  <Link
                    css={css`
                      font-family: ${fonts.walsheimLight};
                    `}
                    to={note.frontmatter.slug}
                    aria-label={`View ${note.frontmatter.title}`}
                  >
                    {note.frontmatter.title}
                  </Link>
                </h4>
              </div>
            ))}
            <Link to="/notes" aria-label="Visit written articles">
              View all notes
            </Link>
          </section>

          {/* ------------ Books Section ------------ */}
          <section className="books">
            <h3>Now Reading</h3>
            {bookQuery.edges.map(({ node: note }) => (
              <div
                key={note.id}
                css={css`
                  margin-bottom: 1em;
                `}
              >
                <h4
                  css={css({
                    marginBottom: rhythm(0.1),
                    transition: 'all 150ms ease',
                    ':hover': {
                      color: theme.colors.primary,
                    },
                  })}
                >
                  <Link
                    css={css`
                      font-family: ${fonts.walsheimLight};
                    `}
                    to={note.frontmatter.slug}
                    aria-label={`View ${note.frontmatter.title}`}
                  >
                    {note.frontmatter.title}
                  </Link>
                </h4>
              </div>
            ))}
          </section>
        </section>

        {/* ------------ Illustration Section ------------ */}
        <section>
          <h3>Illustration Work</h3>
          <div className="illustration">
            {illustrationQuery.edges.map(({ node: illustration }) => (
              <Link
                css={css`
                  font-family: ${fonts.walsheimLight};
                `}
                to={illustration.frontmatter.slug}
                aria-label={`View ${illustration.frontmatter.title}`}
              >
                <div
                  key={illustration.id}
                  css={css`
                    margin-bottom: 40px;
                  `}
                >
                  <Img
                    fluid={illustration.frontmatter.cover.childImageSharp.fluid}
                  />
                  <h4
                    css={css({
                      marginBottom: rhythm(0.3),
                      transition: 'all 150ms ease',
                      ':hover': {
                        color: theme.colors.primary,
                      },
                    })}
                  >
                    {illustration.frontmatter.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    illustrationQuery: allMdx(
      filter: {
        frontmatter: {
          categories: { eq: "illustration" }
          published: { ne: false }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
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

    notesQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "notes" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
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
          }
        }
      }
    }

    bookQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
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
