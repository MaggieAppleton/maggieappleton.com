import React from 'react'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import Container from 'components/Container'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

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
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      venn: file(relativePath: { eq: "venndiagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.profilePic.childImageSharp.fluid)

  return (
    <Layout site={data.site}>
      <Container
        css={css`
          margin-top: 4em;
          max-width: 80%;
          .header {
            display: grid;
            grid-template-columns: 40% 60%;
            grid-gap: 4em;
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
          <div>
            <h1>Maggie Appleton</h1>
            <h3>
              Anthropologist, art director, illustrator, metaphor designer, and
              mediocre developer
            </h3>
            <p>
              I sit in the middle of an odd venn diagram – illustration,
              anthropology, and technology are at the core of everything I make.
              Combining these into something coherent is a weird and ongoing
              challenge.
            </p>
            <Img
              objectFit="contain"
              objectPosition="0% 0%"
              fluid={data.venn.childImageSharp.fluid}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
