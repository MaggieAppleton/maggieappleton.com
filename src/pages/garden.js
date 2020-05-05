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
          grid-template-columns: 35% 65%;
          .header {
            grid-column-start: 1;
            grid-column-end: 3;
            margin-bottom: 1em;
            max-width: 600px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .essays {
            grid-column: 1 / 1;
          }
          .notes {
            grid-column: 2/ 2;
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

        {/* ----------- Essays Section ----------- */}
        <section className="essays">
          <h2>Essays</h2>
          {essaysQuery.edges.map(({ node: essay }) => (
            <Link
              to={essay.frontmatter.slug}
              aria-label={`View ${essay.frontmatter.title}`}
            >
              <div
                key={essay.id}
                css={css`
                  font-family: ${fonts.regularSans};
                  margin-bottom: 1em;
                  margin-right: 2em;
                  padding: 1em 1.2em 1em 0;
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
                <h4>➽ {essay.frontmatter.title}</h4>
                <h5>{essay.excerpt}</h5>
              </div>
            </Link>
          ))}
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
                {/* <div
                  key={note.id}
                  css={css`
                    font-family: ${fonts.walsheimLight};
                    background: ${theme.colors.white};
                    margin-bottom: 1em;
                    border: 1px solid ${theme.colors.lightestGrey};
                    border-radius: 4px;
                    margin-right: 1em;
                    padding: 1em 1.2em;
                    width: 200px;
                    max-height: 280px;
                    overflow: hidden;
                    h4 {
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
                > */}
                <SimpleCard
                  hover
                  key={note.id}
                  css={css`
                    width: 220px;
                    padding: 0.4em 1.4em;
                    margin-right: 1em;
                    margin-bottom: 0;
                    max-height: 280px;
                    overflow: hidden;
                  `}
                >
                  <h4>{note.frontmatter.title}</h4>
                  <h6>{note.frontmatter.topics}</h6>
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
