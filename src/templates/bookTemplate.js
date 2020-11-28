import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import colors from '../lib/colors'
import Container from 'components/Container'
import Layout from '../components/Layout'
import Share from '../components/Share'
import config from '../../config/website'
import PreviousNext from '../components/PreviousNext'
import { bpMaxSM } from '../lib/breakpoints'
import DefaultMdxComponentsProvider from '../components/mdx/DefaultProvider'

export default function Book({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const subtitle = mdx.frontmatter.subtitle
  const cover = mdx.frontmatter.cover

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          margin: 0 auto;
          margin-top: 2em;
          display: flex;
          max-width: 880px;
          flex-direction: column;
          .breadcrumb {
            margin: 0 auto;
            text-align: center;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 2em;
            background: none;
            border: none;
            font-size: 65%;
            color: ${colors.grey};
            padding: 0.2em;
            svg {
              margin-right: 0.8em;
              top: 2px;
              position: relative;
              fill: ${colors.grey};
            }
            span {
              top: -10px;
            }
            :hover {
              box-shadow: none;
              transform: none;
              color: ${colors.orange};
              svg {
              fill: ${colors.orange};
              transition: all 0.3s;
              }
            }
            :focus {
              border: none;
              outline: none;
            }
          }
          .bookInfo {
            display: flex;
            flex-direction: row;
            ${bpMaxSM} {
              flex-wrap: wrap;
            }
            h1 {
              margin-top: 0;
              ${bpMaxSM} {
                margin-top: 0.8em;
              }
            }
            margin: 0 auto;
            align-items: flex-start;
            justify-content: center;
            .gatsby-image-wrapper {
              justify-content: center;
              width: 260px;
              height: auto;
              margin-right: 2.6em;
            }
          }
        `}
      >
        <Link to="/library">
          <button className="breadcrumb">
            <svg
              width="8"
              height="14"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0L10 2L4 8L10 14L8 16L0 8L8 0Z"
              />
            </svg>
            <span>Back to Library</span>
          </button>
        </Link>
        <div className="bookInfo">
          <span>
            <Img
              style={{ borderRadius: '6px' }}
              fluid={cover.childImageSharp.fluid}
              alt={site.siteMetadata.keywords.join(', ')}
            />
          </span>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-bottom: 20px;
              h1 {
                line-height: 1.2em;
              }
              h2 {
                margin: 0.2em 0 0.6em;
              }
              h3 {
                margin-top: 0;
                font-size: 1.3em;
              }
            `}
          >
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <h3>by {author}</h3>
            {date && <h6>Last tended to {date}</h6>}
          </div>
        </div>
        <br />
        <DefaultMdxComponentsProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </DefaultMdxComponentsProvider>
      </Container>
      {/* Next and Previous */}
      <PreviousNext
        prevSlug={prevPage && prevPage.fields.slug}
        prevTitle={prevPage && prevPage.fields.title}
        nextSlug={nextPage && nextPage.fields.slug}
        nextTitle={nextPage && nextPage.fields.title}
      />
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
        subtitle
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
