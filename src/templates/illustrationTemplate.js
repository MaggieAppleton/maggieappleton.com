import React from 'react'
import { graphql } from 'gatsby'
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

export default function Post({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const title = mdx.frontmatter.title
  const date = mdx.frontmatter.date
  const theme = useTheme()

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          margin: 0 auto;
          max-width: 1000px;
          margin-top: 3em;
          ${bpMaxSM} {
            margin-top: 0.8em;
          }
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-bottom: 40px;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            h6 {
              text-align: center;
              opacity: 0.8;
              font-family: ${fonts.regularSans}, sans-serif;
              font-weight: normal;
              margin: 0 5px;
              padding-bottom: 12px;
              border-bottom: 1px solid ${theme.colors.lightGrey};
            }
          `}
        >
          {date && <h6>Project completed in {date}</h6>}
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 2em;
            margin-top: 4em;
            align-content: center;
            button {
              background: ${theme.colors.white};
              border: 1px solid ${theme.colors.lightGrey};
              transition: 700ms ease;
            }
            a {
              color: ${theme.colors.lightGrey};
              transition: 700ms ease;
            }
            &:hover {
              button {
                background: ${theme.colors.orange};
                border: 1px solid ${theme.colors.orange};
              }
              a {
                color: ${theme.colors.white};
              }
            }
          `}
        >
          {prevPage && (
            <button>
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
                    fill={theme.colors.orange}
                  />
                </svg>

                {prevPage.fields.title}
              </Link>
            </button>
          )}
          {nextPage && (
            <button>
              <Link to={`/${nextPage.fields.slug}`} aria-label="View next page">
                {nextPage.fields.title}{' '}
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.70711 23.2929C4.31658 23.6834 3.68342 23.6834 3.29289 23.2929L0.707106 20.7071C0.316582 20.3166 0.316583 19.6834 0.707107 19.2929L7.29289 12.7071C7.68342 12.3166 7.68342 11.6834 7.29289 11.2929L0.707108 4.7071C0.316584 4.31658 0.316584 3.68342 0.707109 3.29289L3.29289 0.707108C3.68342 0.316584 4.31658 0.316583 4.70711 0.707108L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L4.70711 23.2929Z"
                    fill={theme.colors.orange}
                  />
                </svg>
              </Link>
            </button>
          )}
        </div>
        {/* Share Container */}
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
      </Container>
      {/* <SubscribeForm /> */}
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
        date(formatString: "MMMM YYYY")
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
