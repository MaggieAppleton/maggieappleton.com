import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import { rhythm, fonts } from '../lib/typography'
import { bpMaxSM } from '../lib/breakpoints'
import config from '../../config/website'
import SEO from './SEO'
import Container from './Container'
import Layout from './Layout'
import Share from './Share'
import { useTheme } from './Theming'
import get from 'lodash/get'
import HasMounted from './HasMounted'

export default function Note({ site, note, referenceBlock }) {
  const mdx = get(note, 'childMdx')
  const title = get(note, 'title')
  const lastUpdated = get(mdx, 'frontmatter.lastUpdated')
  // const topics = get(mdx, 'frontmatter.topics')
  const growthStage = get(mdx, 'frontmatter.growthStage')
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
          {lastUpdated && <h6>Last tended on {lastUpdated}</h6>}
          {growthStage && <h6><span role="img" aria-label="a small Seedling">🌱</span> {growthStage}</h6>}

        <hr />
        </div>
        </div>
        <br />
        <HasMounted>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          </HasMounted>
        <div>{referenceBlock}</div>
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
