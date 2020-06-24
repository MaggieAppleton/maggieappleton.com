import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import SimpleCard from '../components/SimpleCard'

const GardenPage = ({ data: { site, notesQuery } }) => {
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            margin-bottom: 1em;
            max-width: 660px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .notesGrid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 3em;
          }
        `}
      >
        <section className="header">
          <h1>The Digital Garden</h1>
          <p>
            An open collection of notes, resources, sketches, and explorations
            I'm currently cultivating. Some notes are Seedlings, some are
            budding, and some are fully grown Evergreen.
          </p>
        </section>

        {/* ------------ Notes Section ------------ */}
        <section className="notes">
          <div className="notesGrid">
            {notesQuery.edges.map(({ node: note }) => (
              <Link
                to={`/${note.childMarkdownRemark.frontmatter.slug}`}
                aria-label={`View ${note.title}`}
              >
                <SimpleCard
                  key={note.id}
                  hover
                  css={css`
                    width: 270px;
                    margin-right: 1em;
                    margin-bottom: 1em;
                    padding: 1em 1.2em;
                    h4 {
                      margin: 0;
                    }
                    h6 {
                      margin: 0;
                      padding-top: 1em;
                      font-size: 0.8em;
                      opacity: 60%;
                    }
                  `}
                >
                  <h4>{note.title}</h4>
                  <h6>{note.childMarkdownRemark.frontmatter.growthStage}</h6>
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

    notesQuery: allBrainNote(sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}) {
      edges {
        node {
          id
          title
          childMarkdownRemark {
            frontmatter {
              growthStage
              topics
              slug
            }
          }
        }
      }
    }
  }
`
