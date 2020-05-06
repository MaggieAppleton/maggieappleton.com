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
import { useTheme } from 'components/Theming'
import { bpMaxSM } from '../lib/breakpoints'

export default function Essay({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const author = mdx.frontmatter.author || config.author
  const title = mdx.frontmatter.title
  const cover = mdx.frontmatter.cover
  const date = mdx.frontmatter.date
  const theme = useTheme()

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          margin: 0 auto;
          max-width: 900px;
          margin-top: 3em;
          ${bpMaxSM} {
            margin-top: 0.8em;
          }
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
            margin-bottom: 1em;
            h6 {
              text-align: center;
              opacity: 0.8;
              font-family: ${fonts.regularSans}, sans-serif;
              font-weight: normal;
              padding-bottom: 12px;
              border-bottom: 1px solid ${theme.colors.lightGrey};
            }
          `}
        >
          {date && <h6>Last tended on {date}</h6>}
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
        topics
      }
      body
    }
  }
`
