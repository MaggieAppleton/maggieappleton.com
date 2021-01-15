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
import DefaultMdxComponentsProvider from '../components/mdx/DefaultProvider'

export default function Post({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  const title = mdx.frontmatter.title
  const updated = mdx.frontmatter.updated
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
            margin: 0.6em 0;
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
              opacity: 0.8;
              font-family: ${fonts.regularSans}, sans-serif;
              font-weight: normal;
              margin: 0 5px;
              padding-bottom: 12px;
              border-bottom: 1px solid ${theme.colors.lightGrey};
            }
          `}
        >
          {updated && <h6>{updated}</h6>}
        </div>
        <br />
        <DefaultMdxComponentsProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </DefaultMdxComponentsProvider>
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
        updated(formatString: "MMMM YYYY")
        author
        slug
        topics
      }
      body
    }
  }
`
