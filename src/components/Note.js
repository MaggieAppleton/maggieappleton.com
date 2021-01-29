import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import { rhythm, fonts } from '../lib/typography'
import { darken } from 'polished'
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
  const startDate=get(mdx, 'frontmatter.startDate')
  const updated = get(mdx, 'frontmatter.updated')
  const topics = get(mdx, 'frontmatter.topics')
  const growthStage = get(mdx, 'frontmatter.growthStage')
  const theme = useTheme()
  let growthStageEmoji = '🌱'

  // Growth stage emoji logic
  switch (growthStage) {
    case 'Evergreen':
        growthStageEmoji = '🌳';
        break;
    case 'Budding':
        growthStageEmoji = '🌿';
        break;
  }
  
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isNotePost />
      <Container
        css={css`
        margin-top: 2.4em;
        ${bpMaxSM} {
          margin-top: 0.8em;
        }
        display: grid;
        grid-template-columns:
          1fr
          min(55ch, 100%)
          1fr;
        * {
          grid-column: 2;
        }
        `}
      >
        <div
          className="headerBlock"
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            grid-column: 1/4;
            width: 840px;
            max-width: 100%;
            margin: 0 auto 3em;
            hr {
              margin: 0 0 0.7em 0;
            background: ${theme.colors.lightestGrey};
            border: none;
            flex-grow: 50;
        `}>
        <h1
          css={css`
            text-align: left;
            padding: 0 0 0.4em 0;
          `}
        >
          {title}
        </h1>
        <hr />
        <div css={css`
          display: flex;
          align-items: flex-start;
          h6, span {
            margin: 0;
            font-size: 0.75em;
            text-transform: capitalize;
            letter-spacing: 0.01em;
          }
        `}>
          <div css={css`
          flex-grow: 3;
          justify-content: flex-start;
          display: flex;
          align-items: center;
          ${bpMaxSM} {
            align-items: flex-start;
          }
          h6 {
          color: ${darken(0.2, theme.colors.grey)};
          }
          h6:first-of-type {
            padding-right: 12px;
            color: ${darken(0.1, theme.colors.lightGreen)}
          }
          span {
            padding-right: 12px;
          }
          h6:last-child {
            padding-left: 4px;
          }
          `}>
            {growthStage && (<><h6>{growthStage}</h6><span role="img" aria-label="a small Seedling">{growthStageEmoji}</span></>)}
            {startDate && <h6>Planted {startDate}  – </h6>}
            {updated &&<h6>Last tended {updated}</h6>}
          </div>
          <div css={css`
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            justify-content: flex-end;
            max-width: 220px;
          align-items: center;
          ${bpMaxSM} {
            display: none;
            }
            h6 {
            color: ${theme.colors.grey};
              padding: 1px 6px;
            }
          `}>
              {topics && topics.map((el) => <h6>{el}</h6>)}
          </div>
        </div>
        </div>
        <br />
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
