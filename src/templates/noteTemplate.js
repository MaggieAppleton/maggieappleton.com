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
import { BacklinkItem, BacklinksSection } from '../components/BacklinksSection'

export default function Note({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  // const topics = mdx.frontmatter.topics
  // const growthStage = mdx.frontmatter.growthStage
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
            margin-bottom: 0.6em;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
            display: flex;
            justify-content: center;
            h6 {
              text-align: center;
              font-family: ${fonts.regularSans}, sans-serif;
              font-weight: normal;
              padding-bottom: 12px;
              border-bottom: 1px solid ${theme.colors.lightGrey};
              margin-bottom: 0.8em;
            }
          `}
        >
          {date && <h6>Last tended on {date}</h6>}
        </div>
        {/* <div
          css={css`
            display: flex;
            justify-content: center;
            h6 {
              text-align: center;
              opacity: 0.8;
              font-family: ${fonts.regularSans}, sans-serif;
              font-weight: normal;
              letter-spacing: 0.05em;
            }
          `}
        >
          {growthStage && <h6>{growthStage}</h6>}
        </div>
        <br /> */}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* Next and Previous */}
        {/* <PreviousNext
          prevSlug={prevPage && prevPage.fields.slug}
          prevTitle={prevPage && prevPage.fields.title}
          nextSlug={nextPage && nextPage.fields.slug}
          nextTitle={nextPage && nextPage.fields.title}
        /> */}
        <BacklinksSection>
          <BacklinkItem
            pageTitle="Title"
            pageLink="Link"
            excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution (that would be me 🙌), the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
          />
          <BacklinkItem
            pageTitle="Title"
            pageLink="Link"
            excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution (that would be me 🙌), the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
          />
          <BacklinkItem
            pageTitle="Title"
            pageLink="Link"
            excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution (that would be me 🙌), the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
          />
          <BacklinkItem
            pageTitle="Title"
            pageLink="Link"
            excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution (that would be me 🙌), the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
          />
        </BacklinksSection>
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
        date(formatString: "MMMM DD, YYYY")
        slug
        topics
      }
      body
    }
  }
`
