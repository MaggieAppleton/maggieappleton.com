import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { graphql } from 'gatsby'

const IllustrationPage = ({ data: { site, illustrationQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container>
        <h1>Illustrations</h1>
        <p>Here's some illustrations</p>
        <section>
          <h3>Illustration Work</h3>
          <div className="illustration">
            {illustrationQuery.edges.map(({ node: illustration }) => (
              <Link
                css={css`
                  font-family: ${fonts.walsheimLight};
                `}
                to={illustration.frontmatter.slug}
                aria-label={`View ${illustration.frontmatter.title}`}
              >
                <div
                  key={illustration.id}
                  css={css`
                    margin-bottom: 40px;
                  `}
                >
                  <Img
                    fluid={illustration.frontmatter.cover.childImageSharp.fluid}
                  />
                  <h4
                    css={css({
                      marginBottom: rhythm(0.3),
                      transition: 'all 150ms ease',
                      ':hover': {
                        color: theme.colors.primary,
                      },
                    })}
                  >
                    {illustration.frontmatter.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default IllustrationPage

export const illustrationPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    illustrationQuery: allMdx(
      filter: {
        frontmatter: {
          categories: { eq: "illustration" }
          published: { ne: false }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
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
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
