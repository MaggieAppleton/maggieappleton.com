import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { graphql } from 'gatsby'

const GardenPage = ({ data: { site, notesQuery, essaysQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          display: grid;
          grid-template-columns: 35% 65%;
          .header {
            grid-column-start: 1;
            grid-column-end: 3;
          }
          .essays {
            grid-column: 1 / 1;
          }
          .notes {
            grid-column: 2/ 2;
          }
        `}
      >
        <section className="header">
          <h1>The Digital Garden</h1>
          <p>
            An open collection of my notes, resources, sketches, and
            explorations. These are seedlings I'm cultivating.
          </p>
        </section>

        {/* ----------- Essays Section ----------- */}
        <section className="essays">
          <h2>Essays</h2>
          {essaysQuery.edges.map(({ node: essay }) => (
            <div
              key={essay.id}
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
                  to={essay.frontmatter.slug}
                  aria-label={`View ${essay.frontmatter.title}`}
                >
                  {essay.frontmatter.title}
                </Link>
              </h4>
            </div>
          ))}
        </section>

        {/* ------------ Notes Section ------------ */}
        <section className="notes">
          <h2>Notes</h2>
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
        </section>
      </Container>
    </Layout>
  )
}

export default GardenPage

export const GardenPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    notesQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "notes" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 12
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

    essaysQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "essay" }, published: { ne: false } }
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
          }
        }
      }
    }
  }
`
