import React, { useState } from 'react'
import Layout from 'components/Layout'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import { bpMaxSM } from '../lib/breakpoints'
import { Book } from '../components/Book'
import {PaperCard} from '../components/PaperCard'
import { Link } from 'gatsby'
import { Tabs, Tab, TabContent } from '../components/Tabs'

const LibraryPage = ({ data: { site, bookQuery, paperQuery, talkQuery, podcastQuery } }) => {

  const [activeTab, setActiveTab] = useState(0)

  const handleTabSwitch = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== activeTab) {
      setActiveTab(index)
    }
  }

  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          h1 {
            margin-bottom: 0.4em;
            text-align: center;
          }
          p {
            margin-bottom: 0.8em;
            text-align: center;
          }
          .books {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 auto;
            margin-top: 3em;
            ${bpMaxSM} {
              justify-content: center;
              margin: 3em auto;
            }
            img {
              border-radius: 4px;
            }
          }

          .papers {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 auto;
            margin-top: 3em;
            ${bpMaxSM} {
              justify-content: center;
              margin: 3em auto;
            }
          }

        `}
      >
        <h1>The Library</h1>
        <p>Books, papers, talks and podcasts I think are worth paying attention to.<br />Accompanied by loose and opinionated notes.</p><p>To see things I haven't read browse the <Link to='/antilibrary'>Anti Library</Link></p>

            <Tabs>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 0} id={0}>Books</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 1} id={1}>Papers</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 2} id={2}>Talks</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 3} id={3}>Podcasts</Tab>

            </Tabs>

        {/* ------------ Books Section ------------ */}
          <TabContent activeTab={activeTab === 0}>
          <section className="books">
          {bookQuery.edges.map(({ node: book }) => (
            <Book
              redirectTo={book.frontmatter.redirectTo}
              slug={book.frontmatter.slug}
              title={book.frontmatter.title}
              key={book.id}
              fluidImg={book.frontmatter.cover.childImageSharp.fluid}
              author={book.frontmatter.author}
            />
          ))}
          </section>
          </TabContent>

          {/* Papers Section */}
          <TabContent activeTab={activeTab === 1}>
          <section className="papers">
          {paperQuery.edges.map(({ node: paper }) => (
            <PaperCard
              redirectTo={paper.frontmatter.redirectTo}
              slug={paper.frontmatter.slug}
              title={paper.frontmatter.title}
              key={paper.id}
              author={paper.frontmatter.author}
            />
          ))}
          </section>
          </TabContent>

          {/* Talks Section */}
          <TabContent activeTab={activeTab === 2}>
          <section className="books">
          {talkQuery.edges.map(({ node: talk }) => (
            <Book
              redirectTo={talk.frontmatter.redirectTo}
              slug={talk.frontmatter.slug}
              title={talk.frontmatter.title}
              key={talk.id}
              author={talk.frontmatter.author}
            />
          ))}
          </section>
          </TabContent>

            {/* Podcasts Section */}
            <TabContent activeTab={activeTab === 3}>
          <section className="books">
          {podcastQuery.edges.map(({ node: podcast }) => (
            <Book
              redirectTo={podcast.frontmatter.redirectTo}
              slug={podcast.frontmatter.slug}
              title={podcast.frontmatter.title}
              key={podcast.id}
              author={podcast.frontmatter.author}
            />
          ))}
          </section>
          </TabContent>

      </Container>
    </Layout>
  )
}

export default LibraryPage

export const libraryPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    bookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 45
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            slug
            author
            redirectTo
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

    paperQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "paper" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 45
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            slug
            author
            redirectTo
          }
        }
      }
    }

    talkQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "talk" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 45
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            slug
            author
            redirectTo
          }
        }
      }
    }

    podcastQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "podcast" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 45
    ) {
      edges {
        node {
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            slug
            author
            redirectTo
          }
        }
      }
    }
  }
`
