import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'

export default function Post({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const cover = mdx.frontmatter.cover

  console.log(prevPage, nextPage)

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <article
        css={css`
          width: 100%;
          display: flex;
        `}
      >
        <Container>
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
                font-size: 15px;
                opacity: 0.6;
                font-family: ${fonts.regular}, serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
            {author && <h3>{author}</h3>}
            {author && <span>—</span>}
            {date && <h3>{date}</h3>}
          </div>
          {cover && (
            <div
              css={css`
                max-width: 300px;
                padding: 30px;
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                sizes={cover.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            </div>
          )}
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
      </article>

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
