import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { fonts } from '../lib/typography'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import SimpleCard from '../components/SimpleCard'
import Book from '../components/Book'
import IllustrationCard from '../components/IllustrationCard'

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
            font-size: ${rhythm(2.5)};
            line-height: ${rhythm(2.4)};
            margin-top: 3vw;
            max-width: ${rhythm(22)};
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
          `}
        >
          Helps explain web technology, anthropology, and programming through
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
          `}
        >
          Art Director, Illustrator & Anthropological All-Rounder at{' '}
          <Link to="https://egghead.io">egghead.io</Link>
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
            color: ${theme.colors.red};
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
          h3 {
            margin-top: 0;
          }
          h3,
          h5 {
            margin-bottom: 0.6em;
          }
          h5 {
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .illustration {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 1.2em;
          }
          .books {
            display: flex;
            flex-direction: row;
            padding-right: 2em;
            padding-top: 2em;
            grid-column: 1 / 3;
            ${bpMaxMD} {
              grid-column: 1 / 1;
            }
            ${bpMaxSM} {
              flex-direction: column;
            }
            .bookTitle {
              padding-right: 3em;
            }
          }
          .garden {
            padding-right: 2em;
            padding-bottom: 2em;
            .gardenGrid {
            }
            h4 {
              margin-top: 0.6em;
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
              `}
            >
              A consistently tended collection of half-baked notes, research,
              and sketches.
            </p>

            {/* Notes Section */}

            <div className="gardenGrid">
              {notesQuery.edges.map(({ node: note }) => (
                <SimpleCard
                  hover
                  key={note.id}
                  css={css`
                    margin-bottom: 0.6em;
                    padding: 0;
                  `}
                >
                  <h4
                    css={css({
                      marginBottom: '0.4em',
                      padding: '0.4em 1em',
                      transition: 'all 150ms ease',
                      ':hover': {
                        color: theme.colors.orange,
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
                </SimpleCard>
              ))}
            </div>

            {/* Essays Section
            <h5
              css={css`
                margin-top: 2em;
              `}
            >
              Essays
            </h5>
            {essaysQuery.edges.map(({ node: essay }) => (
              <Link
                to={essay.frontmatter.slug}
                aria-label={`View ${essay.frontmatter.title}`}
              >
                <SimpleCard
                  hover
                  key={essay.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: row;
                    max-width: 100%;
                    margin-bottom: 0.4em;
                    margin-right: 1em;
                    padding: 1em 1.4em;
                    h4 {
                      font-size: 1em;
                      margin: 0.4em 0;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    h5 {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <h4>➽ {essay.frontmatter.title}</h4>
                  <h5>{essay.frontmatter.description}</h5>
                </SimpleCard>
              </Link>
            ))} */}

            <SmallSectionLink float="left" to="/garden" aria="Visit the Garden">
              Visit the Garden
            </SmallSectionLink>
          </section>
        </section>

        {/* ------------ Illustration Section ------------ */}
        <section>
          <TitleSectionLink to="/illustration">
            Illustration Projects
          </TitleSectionLink>
          <div className="illustration">
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
            <TitleSectionLink to="/bookshelf">Bookshelf Notes</TitleSectionLink>
            <p>
              A past and present reading collection. Complete with very loose
              and opinionated notes.
            </p>

            <SmallSectionLink
              float="left"
              to="/bookshelf"
              aria="Browse the Bookshelf"
            >
              Browse the Bookshelf
            </SmallSectionLink>
          </span>
          {bookQuery.edges.map(({ node: book }) => (
            <Book
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
        frontmatter: { type: { eq: "note" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
    ) {
      edges {
        node {
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

    essaysQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "essay" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 2
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
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
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
