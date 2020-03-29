import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.black};
        width: 100%;
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.black};
            position: relative;
            z-index: 5;
            font-family: ${fonts.walsheim};
            font-weight: 100;
            font-size: ${rhythm(2.2)};
            line-height: ${rhythm(2.2)};
            margin: 0;
            max-width: ${rhythm(18)};
          `}
        >
          Maggie Appleton
        </h1>
        <h2
          css={css`
            font-family: ${fonts.cardo};
            font-weight: 200;
            font-size: ${rhythm(1.1)};
            line-height: ${rhythm(1.4)};
            max-width: 600px;
          `}
        >
          {' '}
          I make illustrations that help explain the world of technology and
          programming.
        </h2>
        <h4
          css={css`
            font-family: ${fonts.walsheimLight};
          `}
        >
          Art Director & Lead Illustrator at Egghead.io
        </h4>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          ${bpMaxMD} {
            grid-template-columns: 1fr;
          }
          max-width: 75vw;
          column-gap: 3em;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                css={css`
                  font-family: ${fonts.walsheimLight};
                `}
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Essay →
              </Link>
            </Description>
          </div>
        ))}
        <Link to="/notes" aria-label="Visit written articles">
          View all essays
        </Link>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
          }
        }
      }
    }
  }
`
