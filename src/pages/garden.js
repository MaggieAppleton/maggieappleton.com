import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import SimpleCard from '../components/SimpleCard'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import uniq from 'lodash/uniq'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'

const getTopicsFromNotes = (noteNodes) => 
  noteNodes.reduce((topics, {node: note}) => {
    const newGrowth = get(note, 'childMarkdownRemark.frontmatter.growthStage', 'Seedling')
    let newTopics = get(note, 'childMarkdownRemark.frontmatter.topics', [])
    if(!newTopics || !isArray(newTopics)){
      newTopics = []
    }
    return {
      growthFilters: uniq([...topics.growthFilters, newGrowth]),
      topicFilters: uniq([...topics.topicFilters, ...newTopics])
    }
    }, {growthFilters: [], topicFilters: []})


const GardenPage = ({ data: { site, notesQuery } }) => {
  const filters = getTopicsFromNotes(notesQuery.edges)

  const [activeFilters, setActiveFilters] = React.useState([])
  const handleFilterClick = (filter, options) => {
    const clearFilters = get(options, 'clearFilters', [])
    let newActiveFilters

    
    if(includes(activeFilters, filter)){
      newActiveFilters = activeFilters.filter((f) => f !== filter)
    } else {
      newActiveFilters = activeFilters.concat(filter)
    }
    
    if(!isEmpty(clearFilters)){
      clearFilters.forEach((f) => {
        newActiveFilters = newActiveFilters.filter((activeFilter) => f !== activeFilter) 
      })
    }

    setActiveFilters(newActiveFilters)
  }

  const displayedNotes = notesQuery.edges.filter(({node: note}) => {
    const matchesBoth = activeFilters.reduce((acc, current) => {
      return {
        growth: acc.growth || includes(filters.growthFilters, current) ,
        topics: acc.topics || includes(filters.topicFilters, current)
      }
    }, {growth: false, topics: false})

    
    const matchesGrowth = includes(activeFilters, note.childMarkdownRemark.frontmatter.growthStage)
    const matchesTopic = some(note.childMarkdownRemark.frontmatter.topics, (t) =>  includes(activeFilters, t))
  
    if(matchesBoth.growth && matchesBoth.topics){
      return matchesGrowth && matchesTopic
    }

    return isEmpty(activeFilters) || matchesTopic || matchesGrowth
  })

  console.log({displayedNotes})

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

        {/*------------  Filtering Feature ------------ */}

          <div css={css({display: 'flex', justifyContent: 'space-around'})}>
            <div >
              {filters.growthFilters.map((filter)=> {
                return <div onClick={() => handleFilterClick(filter, {clearFilters: filters.growthFilters.filter(f => f !== filter)})} css={css({
                  background: includes(activeFilters, filter) ? 'tomato' : 'inherit'
                })}>{filter}</div>
              })}
            </div>
            <div>
              {filters.topicFilters.map((filter)=> {
                return <div onClick={() => handleFilterClick(filter)} css={css({
                  background: includes(activeFilters, filter) ? 'tomato' : 'inherit'
                })}>{filter}</div>
              })}
            </div>
          </div>

        {/* ------------ Notes Section ------------ */}
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
                  <h6>{note.childMarkdownRemark.frontmatter.growthStage} 🌿🌲</h6>
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
