import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import ResourceCard from '../components/ResourceCard'
import ResourceBook from '../components/ResourceBook'
import {
    resourceCourses,
    resourceBooks,
  } from '../../static/resourceData'

const ResourcesPage = () => {
  const data = useStaticQuery(graphql`
    query ResourcesPageQuery {
      site {
        ...site
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
        button {
          border: none;
          padding: 3px;
        }
          .header {
            text-align: center;
            margin: 3em auto 2em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.5em;
            }
            p {
              font-size: 1.1em;
              line-height: 1.6em;
            }
          }
          h3 {
            text-align: center;
            font-size: 1.7em;
            margin-bottom: 1em;
            margin-top: 1.6em;
            letter-spacing: 0.02em;
          }
          .mainGrid {
            text-align: left;
            margin-bottom: 4em;
            display: grid;
            align-items: center;
            h1 {
              margin-top: 0;
            }
          }
          .courseGrid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .bookGrid {
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          }
        `}
      >
        <div className="header">
            <h1>Resources</h1>
            <p>
            Want to improve your drawing and visual thinking skills?<br />
These are all my personal recommendations for courses and books.
            </p>

        </div>

        <h3>Learning Platforms & Courses</h3>
            <div className="mainGrid courseGrid">
            {resourceCourses.map((d, i) => {
            return (
              <ResourceCard
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                cost={d.cost}
                url={d.url}
                recCourses={d.recCourses}
              />
            )
          })}
            </div>

            <h3>Books</h3>
            <div className="mainGrid bookGrid">
            {resourceBooks.map((d, i) => {
            return (
              <ResourceBook
                key={i}
                title={d.title}
                description={d.description}
                img={d.img}
                url={d.url}
                author={d.author}
              />
            )
          })}
            </div>
      </Container>
    </Layout>
  )
}

export default ResourcesPage
