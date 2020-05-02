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

export default function Book({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const cover = mdx.frontmatter.cover

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          margin: 0 auto;
          max-width: 1000px;
          margin-top: 3em;
          display: flex;
          flex-direction: column;
          .bookInfo {
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin: 0 auto;
            margin-bottom: 2em;
          }
        `}
      >
        <div className="bookInfo">
          <Img
            css={css`
              max-width: 220px;
              border-radius: 6px;
            `}
            fluid={cover.childImageSharp.fluid}
            alt={site.siteMetadata.keywords.join(', ')}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-bottom: 20px;
            `}
          >
            <h1
              css={css`
                margin-bottom: 20px;
              `}
            >
              {title}
            </h1>
            <h3>{author}</h3>
            {date && <h6>Last updated {date}</h6>}
          </div>
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        <div
          css={css({
            marginTop: '30px',
            display: 'grid',
            gridColumnTemplate: '1fr 1fr',
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
        cover {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      body
    }
  }
`
