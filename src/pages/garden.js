import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { fonts } from '../lib/typography'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import { getTopicsFromNotes } from 'components/TopicFilters'
import SimpleCard from '../components/SimpleCard'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'

const GardenPage = ({ data: { site, notesQuery } }) => {
  // Set theme
  const theme = useTheme()

  // Set up topic and growthStage filters
  const filters = getTopicsFromNotes(notesQuery.edges)
  const [activeFilters, setActiveFilters] = React.useState([])

  // Handle filter
  const handleFilterClick = (filter, options) => {
    const clearFilters = get(options, 'clearFilters', [])
    let newActiveFilters

    if (includes(activeFilters, filter)) {
      newActiveFilters = activeFilters.filter(f => f !== filter)
    } else {
      newActiveFilters = activeFilters.concat(filter)
    }

    if (!isEmpty(clearFilters)) {
      clearFilters.forEach(f => {
        newActiveFilters = newActiveFilters.filter(
          activeFilter => f !== activeFilter,
        )
      })
    }

    setActiveFilters(newActiveFilters)
  }

  const displayedNotes = notesQuery.edges.filter(({ node: note }) => {
    const matchesBoth = activeFilters.reduce(
      (acc, current) => {
        return {
          growth: acc.growth || includes(filters.growthFilters, current),
          topics: acc.topics || includes(filters.topicFilters, current),
        }
      },
      { growth: false, topics: false },
    )

    const matchesGrowth = includes(
      activeFilters,
      note.childMarkdownRemark.frontmatter.growthStage,
    )
    const matchesTopic = some(note.childMarkdownRemark.frontmatter.topics, t =>
      includes(activeFilters, t),
    )

    if (matchesBoth.growth && matchesBoth.topics) {
      return matchesGrowth && matchesTopic
    }

    return isEmpty(activeFilters) || matchesTopic || matchesGrowth
  })

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
          .filterSection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-size: 0.8em;
            font-family: ${fonts.regularSans};
          }
          .growthFilter {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .topicFilter {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
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

        {/*------------  Filtering Feature ------------ */}

        <div className="filterSection">
          <div className="growthFilter">
            {filters.growthFilters.map(filter => {
              return (
                <div
                  onClick={() =>
                    handleFilterClick(filter, {
                      clearFilters: filters.growthFilters.filter(
                        f => f !== filter,
                      ),
                    })
                  }
                  css={css({
                    padding: '0.2em 0.8em',
                    borderRadius: '20px',
                    background: includes(activeFilters, filter)
                      ? theme.colors.blue
                      : 'inherit',
                  })}
                >
                  {filter}
                </div>
              )
            })}
          </div>

          <div className="topicFilter">
            {filters.topicFilters.map(filter => {
              return (
                <div
                  onClick={() => handleFilterClick(filter)}
                  css={css({
                    padding: '0.2em 0.6em',
                    margin: '2px',
                    borderRadius: '20px',
                    background: includes(activeFilters, filter)
                      ? theme.colors.lightOrange
                      : 'inherit',
                  })}
                >
                  {filter}
                </div>
              )
            })}
          </div>
        </div>

        {/* ------------ Notes Section ------------------ */}

        <section className="notes">
          <div className="notesGrid">
            {displayedNotes.map(({ node: note }) => (
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
                    transition: all 400ms ease-in-out;
                    h4 {
                      color: ${theme.colors.darkGrey};
                      margin: 0;
                      &:hover {
                        color: ${theme.colors.black};
                      },
                    }
                    h6 {
                      margin: 0;
                      text-align: right;
                      padding-top: 1em;
                      font-size: 1em;
                    }
                  `}
                >
                  <h4>{note.title}</h4>
                  <span>
                    {note.childMarkdownRemark.frontmatter.growthStage ===
                    'Seedling' ? (
                      <h6>
                        <span role="img" aria-label="seedling">
                          🌱{' '}
                        </span>
                      </h6>
                    ) : null}
                    {note.childMarkdownRemark.frontmatter.growthStage ===
                    'Budding' ? (
                      <h6>
                        <span role="img" aria-label="seedling">
                          🌿
                        </span>{' '}
                      </h6>
                    ) : null}
                    {note.childMarkdownRemark.frontmatter.growthStage ===
                    'Evergreen' ? (
                      <h6>
                        <span role="img" aria-label="seedling">
                          🌳
                        </span>{' '}
                      </h6>
                    ) : null}
                  </span>
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

    notesQuery: allBrainNote(
      sort: { order: DESC, fields: childMarkdownRemark___frontmatter___date }
    ) {
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
