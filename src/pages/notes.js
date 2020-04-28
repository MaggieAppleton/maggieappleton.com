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

const NotesPage = ({ data: { site, notesQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>Notes & Resources</h1>
        <p>Here's some notes</p>
        {/* ------------ Notes Section ------------ */}
        <section className="notes">
          <p>An open wiki of things I'm currently exploring</p>
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

export default NotesPage

export const notesPageQuery = graphql`
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
  }
`
