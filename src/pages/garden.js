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

const GardenPage = ({ data: { site, notesQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .notesGrid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 3em;
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
          <div className="notesGrid">
            {notesQuery.edges.map(({ node: note }) => (
              <Link
                to={note.frontmatter.slug}
                aria-label={`View ${note.frontmatter.title}`}
              >
                <SimpleCard
                  key={note.id}
                  hover
                  css={css`
                    width: 260px;
                    margin-right: 1em;
                    margin-bottom: 1em;
                    padding: 1.4em;
                    h4 {
                      margin: 0;
                    }
                  `}
                >
                  <h4>{note.frontmatter.title}</h4>
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
  }
`
