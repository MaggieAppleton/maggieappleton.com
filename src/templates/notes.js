import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'

const NotesPage = ({
  data: { site, allMdx },
  pageContext: { pagination, categories },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const notes = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter(note => note !== undefined)

  return (
    <Layout site={site}>
      <SEO />
      <Container noVerticalPadding>
        {notes.map(({ node: note }) => (
          <div
            key={note.id}
            css={css`
              :not(:first-of-type) {
                margin-top: 60px;
                ${bpMaxMD} {
                  margin-top: 40px;
                }
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              :first-of-type {
                margin-top: 20px;
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              .gatsby-image-wrapper {
              }
              ${bpMaxSM} {
                padding: 20px;
              }
              display: flex;
              flex-direction: column;
            `}
          >
            {note.frontmatter.banner && (
              <div
                css={css`
                  padding: 60px 60px 40px 60px;
                  ${bpMaxSM} {
                    padding: 20px;
                  }
                `}
              >
                <Link
                  aria-label={`View ${note.frontmatter.title} article`}
                  to={`/${note.fields.slug}`}
                >
                  <Img sizes={note.frontmatter.banner.childImageSharp.fluid} />
                </Link>
              </div>
            )}
            <h2
              css={css`
                margin-top: 30px;
                margin-bottom: 10px;
              `}
            >
              <Link
                aria-label={`View ${note.frontmatter.title} article`}
                to={`/${note.fields.slug}`}
              >
                {note.frontmatter.title}
              </Link>
            </h2>
            {/* <small>{note.frontmatter.date}</small> */}
            <p
              css={css`
                margin-top: 10px;
              `}
            >
              {note.excerpt}
            </p>{' '}
            <Link
              to={`/${note.fields.slug}`}
              aria-label={`view "${note.frontmatter.title}" article`}
            >
              Read Article →
            </Link>
          </div>
        ))}
        <div css={css({ marginTop: '30px' })}>
          {nextPagePath && (
            <Link to={nextPagePath} aria-label="View next page">
              Next Page →
            </Link>
          )}
          {previousPagePath && (
            <Link to={previousPagePath} aria-label="View previous page">
              ← Previous Page
            </Link>
          )}
        </div>
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
      </Container>
    </Layout>
  )
}

export default NotesPage

export const notesQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      filter: {
        frontmatter: { categories: { eq: "notes" }, published: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
