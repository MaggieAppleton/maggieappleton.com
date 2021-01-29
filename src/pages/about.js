import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'

const AboutPage = () => {
const theme = useTheme()

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
        padding: 0;
          justify-items: center;
          margin-top: 4em;
          max-width: 80%;
          .faqBlock {
            text-align: center;
            width: 85%;
            border: 1px solid ${theme.colors.lightGrey};
            border-radius: 5px;
            margin: 1.6em auto 0em;
            padding: 1em;
            transition: all 0.3s ease-in-out;
            h2 {
              transition: all 0.3s ease-in-out;
              color: ${theme.colors.darkGrey};
              margin-top: 0.2em;
              font-size: 1.8em;
              line-height: 1.2em;
            }
            h4 {
              transition: all 0.3s ease-in-out;
              color: ${theme.colors.grey};
              margin: 0.5em;
            }
            :hover {
              border: 1px solid ${theme.colors.orange};
              h2, h4 {
              color: ${theme.colors.black};
              }
            }
          }
          .header {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 2em;
            ${bpMaxSM} {
              grid-template-columns: 1fr;
            }
            .headerText {
              max-width: 540px;
              h2 {
                opacity: 90%;
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
        <div className="headerText">
            <h1>Maggie Appleton</h1>
            <h2>
              Art director, designer, anthropologist, and
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
              I sit in the middle of a few odd venn diagrams – design,
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
              {' '}involves designing visual metaphors for invisible, complicated
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
          <div>
            <Img
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'top center',
            }}
            fluid={data.profilePic.childImageSharp.fluid}
          />
          <a href='/faq'><div className="faqBlock"><h2>Have questions?<br />I have an FAQ</h2></div></a>
          <a href='/resources'><div className="faqBlock"><h2>Want to improve your illustration skills?</h2><h4>I have a recommended resources page</h4></div></a>
          </div>
          
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
