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

export default function Essay({
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
          margin-top: 3em;
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
          {updated && <h6>Last tended on {updated}</h6>}
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
        updated(formatString: "MMMM DD, YYYY")
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
