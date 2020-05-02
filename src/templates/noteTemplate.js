import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'
import NoteSidebar from '../components/mdx/NoteSidebar'

export default function Note({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          margin: 0 auto;
          max-width: 1000px;
          margin-top: 2em;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-bottom: 20px;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            h3,
            span {
              text-align: center;
              font-size: 0.9em;
              opacity: 0.6;
              font-family: ${fonts.regular}, serif;
              font-weight: normal;
              margin: 0 5px;
            }
          `}
        >
          {date && <h3>Last tended on {date}</h3>}
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        <div
          css={css({
            marginTop: '30px',
            display: 'grid',
            gridColumnTemplate: '1fr 1fr',
            clear: 'both',
          })}
        >
          {nextPage && (
            <Link to={`/${nextPage.fields.slug}`} aria-label="View next page">
              {nextPage.fields.title} →
            </Link>
          )}
          {prevPage && (
            <Link
              to={`/${prevPage.fields.slug}`}
              aria-label="View previous page"
            >
              ← {prevPage.fields.title}
            </Link>
          )}
        </div>
      </Container>
      {/* <SubscribeForm /> */}

      {/* Share Container */}
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        slug
        keywords
      }
      body
    }
  }
`
