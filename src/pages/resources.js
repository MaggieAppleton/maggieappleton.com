import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Link } from 'gatsby'
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
        display: grid;
          .header {
            text-align: center;
            margin-bottom: 40px;
          }
          .h3 {
            text-align: center;
          }
          .mainGrid {
            display: grid;
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr) )',
            align-items: center;
          }
        `}
      >
        <div className="header">
            <h1>Resources</h1>
            <p>
            Want to improve your drawing and visual thinking skills?
This is a collection of my personal recommendations for online courses and books.
            </p>
            <h3>Learning Platforms & Courses</h3>
            <div className="mainGrid">
            {resourceCourses.map((d, i) => {
            console.log(d.recCourses)
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
            <div className="mainGrid">
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
        </div>
      </Container>
    </Layout>
  )
}

export default ResourcesPage
