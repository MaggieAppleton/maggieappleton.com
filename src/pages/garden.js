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
import SimpleCard from '../components/SimpleCard'

const GardenPage = ({ data: { site, notesQuery, essaysQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          display: grid;
          grid-template-columns: 30% 70%;
          grid-column-gap: 1em;
          .header {
            grid-column-start: 1;
            grid-column-end: 3;
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .essays {
            grid-column: 2 / 2;
            .essaysGrid {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
          }
          .notes {
            grid-column: 1/ 1;
            .notesGrid {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
          }
        `}
      >
        <section className="header">
          <h1>The Digital Garden</h1>
          <p>
            An open collection of my notes, resources, sketches, and
            explorations. Seedlings of ideas I'm currently cultivating.
          </p>
        </section>

        {/* ------------ Notes Section ------------ */}
        <section className="notes">
          <h2>Notes</h2>
          <div className="notesGrid">
            {notesQuery.edges.map(({ node: note }) => (
              <Link
                to={note.frontmatter.slug}
                aria-label={`View ${note.frontmatter.title}`}
              >
                <SimpleCard
                  hover
                  key={note.id}
                  css={css`
                    width: 280px;
                    padding: 0.2em 1.4em;
                    margin-right: 1em;
                    margin-bottom: 0.4em;
                    max-height: 280px;
                    overflow: hidden;
                    h4 {
                      margin-top: 1em;
                    }
                  `}
                >
                  <h4>{note.frontmatter.title}</h4>
                </SimpleCard>
              </Link>
            ))}
          </div>
        </section>

        {/* ----------- Essays Section ----------- */}

        <section className="essays">
          <h2>Essays</h2>
          <div className="essaysGrid">
            {essaysQuery.edges.map(({ node: essay }) => (
              <Link
                to={essay.frontmatter.slug}
                aria-label={`View ${essay.frontmatter.title}`}
              >
                <SimpleCard
                  hover
                  key={essay.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    flex: 1 1 auto;
                    max-width: 340px;
                    margin-bottom: 1em;
                    margin-right: 1em;
                    padding: 0.6em 1.4em 1.6em 1.4em;
                    h4 {
                      font-size: 1.1em;
                      margin-top: 0.2em;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    h5 {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Img fluid={essay.frontmatter.cover.childImageSharp.fluid} />
                  <h4>➽ {essay.frontmatter.title}</h4>
                  <h5>{essay.frontmatter.description}</h5>
                </SimpleCard>
              </Link>
            ))}
          </div>
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
            topics
          }
        }
      }
    }

    essaysQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "essay" }, published: { ne: false } }
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
