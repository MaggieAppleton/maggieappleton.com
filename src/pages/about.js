import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Link } from 'gatsby'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      site {
        ...site
        siteMetadata {
          title
        }
      }
      profilePic: file(relativePath: { eq: "profilePic.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      venn: file(relativePath: { eq: "venndiagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
          justify-items: center;
          margin-top: 4em;
          max-width: 80%;
          .header {
            display: grid;
            grid-template-columns: 45% 65%;
            grid-gap: 3.2em;
            ${bpMaxSM} {
              grid-template-columns: 1fr;
            }
            .headerText {
              max-width: 540px;
              h2 {
                opacity: 80%;
                max-width: 500px;
                font-size: 1.7em;
                line-height: 1.3em;
                margin-bottom: 1em;
              }
              p {
                max-width: 500px;
                line-height: 1.7em;
              }
            }
          }
        `}
      >
        <div className="header">
          <Img
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
            fluid={data.profilePic.childImageSharp.fluid}
          />
          <div className="headerText">
            <h1>Maggie Appleton</h1>
            <h2>
              Anthropologist, art director, illustrator, metaphor designer, and
              mediocre developer
            </h2>
            <Img
              style={{
                maxWidth: '420px',
                margin: '0 auto',
                marginBottom: '1em',
              }}
              fluid={data.venn.childImageSharp.fluid}
            />
            <p>
              I sit in the middle of a few odd venn diagrams – illustration,
              anthropology, and technology are at the core of everything I make.{' '}
            </p>
            <p>
              Combining these into something coherent is a weird and ongoing
              challenge.
            </p>
            <p>
              My work at{' '}
              <a
                href="https://egghead.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                egghead
              </a>
              involves designing visual metaphors for invisible, complicated
              software concepts.
            </p>
            <p>
              On the side I'm always working on{' '}
              <Link to="/essays">illustrated essays</Link> that explore the
              cultural side of digital technology.
            </p>
            <p>
              In my
              <Link to="/garden"> digital garden of notes</Link> you'll find a
              good amount of linguistics, cognitive metaphors, cultural
              speculation, and tool nerding.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
