import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { lighten, darken } from 'polished'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import SimpleCard from '../components/SimpleCard'
import { Book } from '../components/Book'
import IllustrationCard from '../components/IllustrationCard'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        margin-top: 1.6em;
        margin-bottom: 2em;
        ${bpMaxSM} {
          margin-top: 0.6em;
          margin-bottom: 0.8em;
        }
      `}
    >
      <Container>
        <h1
          css={css`
            color: ${theme.colors.black};
            z-index: 5;
            font-family: ${fonts.walsheimBold};
            font-weight: 100;
            font-size: ${rhythm(2.5)};
            line-height: ${rhythm(2.4)};
            margin-top: 3vw;
            max-width: ${rhythm(22)};
            ${bpMaxSM} {
              font-size: ${rhythm(1.8)};
              line-height: ${rhythm(2.1)};
            }
          `}
        >
          Maggie Appleton
        </h1>
        <h2
          css={css`
            font-family: ${fonts.regular};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            font-size: ${rhythm(1.3)};
            line-height: ${rhythm(1.7)};
            max-width: ${rhythm(26)};
            ${bpMaxSM} {
              font-size: ${rhythm(0.9)};
              line-height: ${rhythm(1.1)};
          `}
        >
          Helps explain technology, anthropology, and programming through
          illustration.
        </h2>
        <h4
          css={css`
            margin-top: ${rhythm(1)};
            font-family: ${fonts.regularSans};
            font-weight: 300;
            margin-bottom: ${rhythm(1.2)};
            line-height: ${rhythm(1)};
            color: ${theme.colors.grey};
            letter-spacing: 0em;
            ${bpMaxSM} {
              margin-bottom: ${rhythm(0.4)};
            }
          `}
        >
          Art Director, Metaphor Designer & Anthropological All-Rounder at{' '}
          <a
            href="https://egghead.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            egghead.io
          </a>
        </h4>
      </Container>
    </section>
  )
}

const SmallSectionLink = props => {
  const theme = useTheme()
  return (
    <Link
      css={css`
        transition: all 0.8s;
        justify-self: end;
        float: ${props.float};
        font-size: 0.8em;
        font-family: ${fonts.walsheim};
        padding: 8px 0px;
        border-bottom: 1px solid ${theme.colors.lightestGrey};
        &:hover {
          color: ${theme.colors.darkBlue};
          transform: translateY(2px);
          border-bottom: 2px solid ${theme.colors.blue};
        }
      `}
      to={props.to}
      aria-label={props.aria}
    >
      {props.children}
    </Link>
  )
}

const TitleSectionLink = props => {
  const theme = useTheme()
  return (
    <Link
      css={css`
        h3 {
          margin-bottom: 1em;
          transition: all 0.6s ease;
          &:hover {
            color: ${theme.colors.orange};
          }
        }
      `}
      to={props.to}
      aria-label={props.aria}
    >
      <h3>{props.children}</h3>
    </Link>
  )
}

// ------- // Main Section // ---------- //

export default function Index({
  data: { site, bookQuery, illustrationQuery, essaysQuery, notesQuery },
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
          grid-template-columns: 3fr 5fr;
          ${bpMaxMD} {
            display: flex;
            flex-direction: column;
          }
          h2,
          h3 {
            margin-top: 0;
          }
          h3,
          h5 {
            margin-bottom: 0.8em;
          }
          h5 {
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .essays {
            margin-bottom: 1.2em;
            justify-self: end;
            .essaysGrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              grid-gap: 0.8em;
              margin-bottom: 1em;
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
            ${bpMaxSM} {
              grid-gap: 0.6em;
              margin-bottom: 3em;
            }
          }
          .illustration {
            margin-bottom: 1.2em;
            grid-column: 1 / 3;
            display: column;
            flex-direction: row;
            ${bpMaxSM} {
              margin-bottom: 3em;
            }
            .illustrationGrid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 1em;
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
          }
          .books {
            display: flex;
            flex-direction: row;
            padding-top: 2em;
            grid-column: 1 / 3;
            ${bpMaxMD} {
              grid-column: 1 / 1;
              flex-wrap: wrap;
            }
            ${bpMaxSM} {
              flex-direction: column;
              align-items: center;
            }
            .bookTitle {
              padding-right: 3em;
              margin-bottom: 2em;
            }
          }
          .garden {
            padding-right: 2em;
            padding-bottom: 2em;
            ${bpMaxSM} {
              margin-bottom: 3em;
            }
            .gardenGrid {
              display: grid;
              grid-template-columns: 1fr;
              ${bpMaxMD} {
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 0.6em;
              }
              ${bpMaxSM} {
                grid-template-columns: 1fr;
              }
            }
          }
          button {
            width: 100%;
            max-width: 240px;
            margin-bottom: 20px;
          }
        `}
      >
        <section>
          {/* ------------ Garden Section ------------ */}
          <section className="garden">
            {/* <button>Start Here</button> */}
            <TitleSectionLink to="/garden">The Digital Garden</TitleSectionLink>
            <p
              css={css`
                margin-bottom: 1em;
                line-height: 1.4em;
              `}
            >
              A consistently tended collection of half-baked notes, research,
              and sketches.
            </p>

            {/* Notes Section */}

            <div className="gardenGrid">
              {notesQuery.edges.map(({ node: note }) => (
                <Link
                  css={css`
                    font-family: ${fonts.walsheimLight};
                  `}
                  to={note.childMarkdownRemark.frontmatter.slug}
                  aria-label={`View ${note.title}`}
                >
                  <SimpleCard
                    margintop="0em"
                    marginbottom="0em"
                    key={note.id}
                    hover
                    css={css`
                      margin-bottom: 0.6em;
                      padding: 0.8em 1em;
                      transition: all 400ms ease-in-out;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: space-between;
                      h4 {
                        color: ${theme.colors.darkGrey};
                        margin-top: 0;
                        margin-bottom: 0;
                        &:hover {
                          color: ${theme.colors.black};
                        };
                      }
                      div.metadata {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        h6 {
                          margin: 0;
                          text-align: right;
                          min-width: 100px;
                          padding-bottom: 0.2em;
                        }
                      }
                      h6.growthStage {
                        font-size: 0.6em;
                        color: ${darken(0.05, theme.colors.lightGreen)};
                        opacity: 90%;
                        text-transform: capitalize;
                        letter-spacing: 0.3px;
                        span {
                          padding-left: 0.5em;
                          font-size: 1em;
                        }
                      }
                      h6.updated {
                        font-size: 0.6em;
                        opacity: 80%;
                      }
                    `}
                  >
                    <h4>{note.title}</h4>
                    <div class="metadata">
                      <h6 class="updated">
                        {note.childMarkdownRemark.frontmatter.updated}
                      </h6>
                      <span>
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Seedling' ? (
                          <h6 class="growthStage">
                            {' '}
                            seedling
                            <span role="img" aria-label="seedling">
                              🌱{' '}
                            </span>
                          </h6>
                        ) : null}
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Budding' ? (
                          <h6 class="growthStage">
                            {' '}
                            budding
                            <span role="img" aria-label="seedling">
                              🌿
                            </span>{' '}
                          </h6>
                        ) : null}
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Evergreen' ? (
                          <h6 class="growthStage">
                            {' '}
                            evergreen
                            <span role="img" aria-label="seedling">
                              🌳
                            </span>{' '}
                          </h6>
                        ) : null}
                      </span>
                    </div>
                  </SimpleCard>
                </Link>
              ))}
            </div>

            <SmallSectionLink
              float="right"
              to="/garden"
              aria="Visit the Garden"
            >
              Visit the Garden
            </SmallSectionLink>
          </section>
        </section>

        {/* ------------------ Essays Section-----------------  */}
        <section className="essays">
          <TitleSectionLink to="/essays">Illustrated Essays</TitleSectionLink>
          <div className="essaysGrid">
            {essaysQuery.edges.map(({ node: essay }) => (
              <Link
                to={`/${essay.frontmatter.slug}`}
                aria-label={`View ${essay.frontmatter.title}`}
              >
                <SimpleCard
                  margintop="0em"
                  marginbottom="0em"
                  hover
                  key={essay.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    max-width: 350px;
                    margin: 0 auto;
                    padding: 0.4em 1.2em 0.8em 1.2em;
                    h4 {
                      font-size: 1.1em;
                      margin-top: 0.2em;
                      margin-bottom: 0.4em;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    h6 {
                      margin-bottom: 0;
                      line-height: 1.3em;
                    }
                  `}
                >
                  <Img fluid={essay.frontmatter.cover.childImageSharp.fluid} />
                  <h4>{essay.frontmatter.title}</h4>
                  <h6>{essay.frontmatter.description}</h6>
                </SimpleCard>
              </Link>
            ))}
          </div>

          <SmallSectionLink float="right" to="/essays" aria="Read More Essays">
            Read More Essays
          </SmallSectionLink>
        </section>

        {/* ------------ Illustration Section ------------ */}
        <section className="illustration">
          <TitleSectionLink to="/illustration">
            Illustration Projects
          </TitleSectionLink>
          <div className="illustrationGrid">
            {illustrationQuery.edges.map(({ node: illustration }) => (
              <IllustrationCard
                slug={illustration.frontmatter.slug}
                title={illustration.frontmatter.title}
                id={illustration.id}
                fluid={illustration.frontmatter.cover.childImageSharp.fluid}
              />
            ))}
          </div>
          <SmallSectionLink
            float="right"
            to="/illustration"
            aria="See More Illustrations"
          >
            See More Illustrations
          </SmallSectionLink>
        </section>

        {/* ------------ Books Section ------------ */}
        <section className="books">
          <span className="bookTitle">
            <TitleSectionLink to="/library">Library Notes</TitleSectionLink>
            <p
              css={css`
                margin-bottom: 1em;
                line-height: 1.4em;
              `}
            >
              A past and present reading collection. Complete with very loose
              and opinionated notes.
            </p>

            <SmallSectionLink
              float="left"
              to="/library"
              aria="Browse the Library"
            >
              Browse the Library
            </SmallSectionLink>
          </span>
          {bookQuery.edges.map(({ node: book }) => (
            <Book
              redirectTo={book.frontmatter.redirectTo}
              slug={book.frontmatter.slug}
              title={book.frontmatter.title}
              key={book.id}
              fluidImg={book.frontmatter.cover.childImageSharp.fluid}
              author={book.frontmatter.author}
            />
          ))}
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
        frontmatter: { type: { eq: "illustration" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
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

    notesQuery: allBrainNote(
      sort: { order: DESC, fields: childMarkdownRemark___frontmatter___updated }
      limit: 6
    ) {
      edges {
        node {
          id
          title
          childMarkdownRemark {
            frontmatter {
              slug
              growthStage
              updated(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }

    essaysQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "essay" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
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

    bookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            redirectTo
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
