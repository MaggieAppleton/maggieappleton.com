import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
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
          display: grid;
          grid-template-columns:
            1fr
            min(55ch, 100%)
            1fr;
          * {
            grid-column: 2;
          }
          flex-direction: column;
          .breadcrumb {
            margin: 0 auto;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 2em;
          }
          .bookInfo {
            display: flex;
            grid-column: 1 / 4;
            max-width: 840px;
            flex-direction: row;
            ${bpMaxSM} {
              flex-wrap: wrap;
            }
            margin-bottom: 2em;
            margin: 0 auto;
            align-items: center;
            margin-bottom: 2em;
            .gatsby-image-wrapper {
              justify-content: center;
              width: 260px;
              height: auto;
              margin-right: 3em;
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
