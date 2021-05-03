import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD  } from '../lib/breakpoints'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'
import {
  podcastData,
  talksData,
} from '../../static/aboutPageData'

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
        ${bpMaxMD} {
          padding: 0 1rem;
        }
        justify-items: center;
        margin-top: 4em;
        max-width: 1200px;
          
          .header {
            margin: 0 auto 4rem;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 2em;
            ${bpMaxSM} {
              grid-template-columns: 1fr;
              margin: 0 auto 2rem;
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
                margin: 1rem 0;
              }
            }
            }
          }

          .talksPodcasts {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            ${bpMaxMD} {
              grid-template-columns: 1fr;
              grid-gap: 1rem;
            }
            grid-gap: 3rem;

            p {
              margin: 0;
              padding: 0;
              font-size: 20px;
              line-height: 26px;
            }

            .podtalkItem {
              padding-bottom: 0.8rem;
              border-bottom: 1px solid #D6E0EB;
              margin-bottom: 0.8rem;
              h5 {
                margin: 0.3rem 0 0 0;
              }
              .date {
                margin: 0;
                font-size: 16px;
                opacity: 70%;
              }
            }

            .faqBlock {
              text-align: center;
              border: 1px solid ${theme.colors.lightGrey};
              border-radius: 5px;
              margin: 1.6rem auto 0em;
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
        `}
      >
        <div className="header">
        <div className="headerText">
            <h1>Maggie Appleton</h1>
            <h2>
             Designer, anthropologist, and
              mediocre developer
            </h2>
            <p>
              I sit at the intersection of design,
              anthropology, and technology. These three are at the core of everything I make. Combining them into a coherent career is a weird and ongoing
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
          </div>
          </div>

          <section className="talksPodcasts">

          <div>
              <h3>Talks</h3>
          {talksData.map((d, i) => {
            return (
              <div className="podtalkItem">
                <a href={d.url}><p>{d.talkTitle}</p></a>
                <h5>{d.conference}</h5>
                <h5 className="date">{d.date}</h5>
              </div>
            )
          })}
            </div>

            <div>
              <h3>Podcast Chats</h3>
          {podcastData.map((d) => {
            return (
              <div className="podtalkItem">
                <a href={d.url}><p>{d.episodeName}</p></a>
                <h5>{d.podcastName}</h5>
                <h5 className="date">{d.date}</h5>
              </div>
            )
          })}
            </div>

          <div>
          <a href='/faq'><div className="faqBlock"><h2>Have questions?<br />I have an FAQ</h2></div></a>
            <a href='/resources'><div className="faqBlock"><h2>Want to improve your illustration skills?</h2><h4>I have a recommended resources page</h4></div></a>
          </div>

          </section>
          
      </Container>
    </Layout>
  )
}

export default AboutPage
