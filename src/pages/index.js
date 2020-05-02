import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxMD } from '../lib/breakpoints'
import { TooltipLink } from '../components/TooltipLink'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        margin-top: 1.6em;
        margin-bottom: 2em;
      `}
    >
      <Container>
        <h1
          css={css`
            color: ${theme.colors.black};
            position: relative;
            z-index: 5;
            font-family: ${fonts.walsheimBold};
            font-weight: 100;
            font-size: ${rhythm(2.4)};
            line-height: ${rhythm(2.4)};
            margin-top: 3vw;
            max-width: ${rhythm(22)};
          `}
        >
          Maggie Appleton
        </h1>
        <h2
          css={css`
            font-family: ${fonts.cardo};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            font-size: ${rhythm(1.3)};
            line-height: ${rhythm(1.8)};
            max-width: ${rhythm(26)};
          `}
        >
          Helps explain web technology, anthropology, and programming through
          illustration.
        </h2>
        <h4
          css={css`
            font-family: ${fonts.walsheimLight};
            font-weight: 300;
            margin-bottom: 3vw;
            color: ${theme.colors.grey};
          `}
        >
          Art Director, Lead Illustrator & All-Rounder at{' '}
          <TooltipLink noToolTip to="https://egghead.io">
            Egghead.io
          </TooltipLink>
        </h4>
      </Container>
    </section>
  )
}

/* Effect 17: move up fade out, push border */

// .cl-effect-17 a::before {
// 	color: #fff;
// 	text-shadow: 0 0 1px rgba(255,255,255,0.3);
// 	content: attr(data-hover);
// 	position: absolute;
// 	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
// 	-moz-transition: -moz-transform 0.3s, opacity 0.3s;
// 	transition: transform 0.3s, opacity 0.3s;
// 	pointer-events: none;
// }

// .cl-effect-17 a::after {
// 	content: '';
// 	position: absolute;
// 	left: 0;
// 	bottom: 0;
// 	width: 100%;
// 	height: 2px;
// 	background: #fff;
// 	opacity: 0;
// 	-webkit-transform: translateY(5px);
// 	-moz-transform: translateY(5px);
// 	transform: translateY(5px);
// 	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
// 	-moz-transition: -moz-transform 0.3s, opacity 0.3s;
// 	transition: transform 0.3s, opacity 0.3s;
// 	pointer-events: none;
// }

// .cl-effect-17 a:hover::before,
// .cl-effect-17 a:focus::before {
// 	opacity: 0;
// 	-webkit-transform: translateY(-2px);
// 	-moz-transform: translateY(-2px);
// 	transform: translateY(-2px);
// }

// .cl-effect-17 a:hover::after,
// .cl-effect-17 a:focus::after {
// 	opacity: 1;
// 	-webkit-transform: translateY(0px);
// 	-moz-transform: translateY(0px);
// 	transform: translateY(0px);
// }

const SectionLink = props => {
  const theme = useTheme()
  return (
    <Link
      css={css`
        transition: all 0.8s;
        justify-self: end;
        float: right;
        font-size: 0.8em;
        font-family: ${fonts.walsheim};
        padding: 8px 0px;
        border-bottom: 1px solid ${theme.colors.lightestGrey};
        &:hover {
          color: ${theme.colors.darkBlue};
          transform: translateY(2px);
          border-bottom: 2px solid ${theme.colors.blue};
          transition: all 0.8s;
        }
      `}
      to={props.to}
      aria-label={props.aria}
    >
      {props.children}
    </Link>
  )
}

// ------- // Main Section // ---------- //

export default function Index({
  data: { site, bookQuery, illustrationQuery, notesQuery },
}) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          padding-top: 0;
          display: grid;
          grid-gap: 2.2em;
          grid-template-columns: 2fr 4fr;
          ${bpMaxMD} {
            grid-template-columns: 100%;
          }
          h2,
          h3,
          h4 {
            margin-top: 0;
          }
          .illustration {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 1em;
          }
          .books {
            margin-top: 3em;
            border-right: 1px solid ${theme.colors.lightGrey};
            padding-right: 2em;
          }
          .notes {
            border-right: 1px solid ${theme.colors.lightGrey};
            padding-right: 2em;
            padding-bottom: 1.2em;
          }
          button {
            width: 100%;
            max-width: 240px;
            margin-bottom: 20px;
          }
        `}
      >
        <section>
          {/* ------------ Notes Section ------------ */}
          <section className="notes">
            {/* <button>Start Here</button> */}
            <Link to="/garden">
              <h3>The Digital Garden</h3>
            </Link>
            <p
              css={css`
                margin-bottom: 0.3em;
              `}
            >
              A collection of essays, notes, research, and sketches.
            </p>
            <h6>Carefully tended over time.</h6>
            {notesQuery.edges.map(({ node: note }) => (
              <div
                key={note.id}
                css={css`
                  margin-bottom: 1em;
                `}
              >
                <h4
                  css={css({
                    marginBottom: rhythm(0.1),
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
                    to={note.frontmatter.slug}
                    aria-label={`View ${note.frontmatter.title}`}
                  >
                    {note.frontmatter.title}
                  </Link>
                </h4>
              </div>
            ))}
            <SectionLink to="/garden" aria="Visit the Garden">
              Visit the Garden
            </SectionLink>
          </section>

          {/* ------------ Books Section ------------ */}
          <section className="books">
            <h3>Currently Reading</h3>
            {bookQuery.edges.map(({ node: book }) => (
              <div
                key={book.id}
                css={css`
                  margin-bottom: 1em;
                `}
              >
                <h4
                  css={css({
                    marginBottom: rhythm(0.1),
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
                    to={book.frontmatter.slug}
                    aria-label={`View ${book.frontmatter.title}`}
                  >
                    <Img fluid={book.frontmatter.cover.childImageSharp.fluid} />
                    {book.frontmatter.title}
                  </Link>
                </h4>
              </div>
            ))}
            <SectionLink to="/bookshelf" aria="Browse the Bookshelf">
              Browse the Bookshelf
            </SectionLink>
          </section>
        </section>

        {/* ------------ Illustration Section ------------ */}
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
          <SectionLink to="/illustration" aria="See More Illustrations">
            See More Illustrations
          </SectionLink>
        </section>
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

    notesQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "notes" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
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

    bookQuery: allMdx(
      filter: {
        frontmatter: { categories: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 1
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
