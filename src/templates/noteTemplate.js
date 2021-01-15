import React from 'react'
import { graphql } from 'gatsby'
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
import PreviousNext from '../components/PreviousNext'
// import { BacklinkItem, BacklinksSection } from '../components/BacklinksSection'

export default function Note({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const updated = mdx.frontmatter.updated
  const title = mdx.frontmatter.title
  // const topics = mdx.frontmatter.topics
  const growthStage = mdx.frontmatter.growthStage
  const theme = useTheme()

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
          max-width: 940px;
          margin-top: 3em;
          ${bpMaxSM} {
            margin-top: 0.8em;
          }
        `}
      >
        <div
          className="headerBlock"
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            max-width: 840px;
            margin: 0 auto;
        `}>
        <h1
          css={css`
            text-align: left;
            font-size: 3em;
            padding: 0 0 0.4em 0;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1em;
            h6 {
              margin: 0;
              border: 1px solid ${theme.colors.lightestGrey};
              text-align: center;
              align-self: center;
              font-family: ${fonts.regularSans}, 
              sans-serif;
              text-transform: capitalize;
              flex-grow: 1;
              padding: 0.4em 0.8em;
            }
            hr {
              margin: 0;
              background: ${theme.colors.lightestGrey};
              align-self: center;
              border: none;
              flex-grow: 50;
              ${bpMaxSM} {
              display: none;
              }
            }
          `}
        >
          {updated && <h6>Last tended on {updated}</h6>}
          {growthStage && <h6><span role="img" aria-label="a small Seedling">🌱</span> {growthStage}</h6>}

        <hr />
        </div>
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        <PreviousNext
          prevSlug={prevPage && prevPage.fields.slug}
          prevTitle={prevPage && prevPage.fields.title}
          nextSlug={nextPage && nextPage.fields.slug}
          nextTitle={nextPage && nextPage.fields.title}
        />
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
        updated(formatString: "MMMM DD, YYYY")
        slug
        topics
        growthStage
      }
      body
    }
  }
`
