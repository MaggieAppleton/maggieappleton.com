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
import { useTheme } from 'components/Theming'

export default function Book({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const cover = mdx.frontmatter.cover
  const theme = useTheme()

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
        {/* Next and Previous */}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 2em;
            margin-top: 4em;
            align-content: center;
          `}
        >
          {prevPage && (
            <Link
              to={`/${prevPage.fields.slug}`}
              aria-label="View previous page"
            >
              <svg
                width="24"
                height="16"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2929 0.707107C11.6834 0.316582 12.3166 0.316583 12.7071 0.707107L15.2929 3.29289C15.6834 3.68342 15.6834 4.31658 15.2929 4.70711L8.70711 11.2929C8.31658 11.6834 8.31658 12.3166 8.70711 12.7071L15.2929 19.2929C15.6834 19.6834 15.6834 20.3166 15.2929 20.7071L12.7071 23.2929C12.3166 23.6834 11.6834 23.6834 11.2929 23.2929L0.707107 12.7071C0.316583 12.3166 0.316583 11.6834 0.707107 11.2929L11.2929 0.707107Z"
                  fill={theme.colors.grey}
                />
              </svg>

              {prevPage.fields.title}
            </Link>
          )}
          {nextPage && (
            <Link to={`/${nextPage.fields.slug}`} aria-label="View next page">
              {nextPage.fields.title}{' '}
              <svg
                width="24"
                height="16"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.70711 23.2929C4.31658 23.6834 3.68342 23.6834 3.29289 23.2929L0.707106 20.7071C0.316582 20.3166 0.316583 19.6834 0.707107 19.2929L7.29289 12.7071C7.68342 12.3166 7.68342 11.6834 7.29289 11.2929L0.707108 4.7071C0.316584 4.31658 0.316584 3.68342 0.707109 3.29289L3.29289 0.707108C3.68342 0.316584 4.31658 0.316583 4.70711 0.707108L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L4.70711 23.2929Z"
                  fill={theme.colors.grey}
                />
              </svg>
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
