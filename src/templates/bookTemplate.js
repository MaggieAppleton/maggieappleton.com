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
          margin-top: 2em;
          display: flex;
          flex-direction: column;
          .breadcrumb {
            margin: 0 auto;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 2em;
          }
          .bookInfo {
            display: flex;
            flex-direction: row;
            margin-bottom: 2em;
            width: 75%;
            margin: 0 auto;
            align-items: center;
            margin-bottom: 2em;
            .gatsby-image-wrapper {
              justify-content: center;
              width: 260px;
              height: auto;
              margin-right: 2em;
            }
          }
        `}
      >
        <div className="bookInfo">
          <span>
            <Link to="/bookshelf">
              <h6 className="breadcrumb">◁ Back to Bookshelf</h6>
            </Link>

            <Img
              css={css`
                border-radius: 6px;
              `}
              fluid={cover.childImageSharp.fluid}
              alt={site.siteMetadata.keywords.join(', ')}
            />
          </span>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-bottom: 20px;
              h3 {
                margin-top: 0;
              }
            `}
          >
            <h1>{title}</h1>
            <h3>{author}</h3>
            {date && <h6>Last tended to {date}</h6>}
          </div>
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        <div
          css={css({
            marginTop: '2em',
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
        topics
      }
      body
    }
  }
`
