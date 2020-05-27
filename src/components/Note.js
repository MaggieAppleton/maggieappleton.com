import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import { fonts } from '../lib/typography'
import { bpMaxSM } from '../lib/breakpoints'
import config from '../../config/website'
import SEO from './SEO'
import Container from './Container'
import Layout from './Layout'
import Share from './Share'
import { useTheme } from './Theming'
import PreviousNext from './PreviousNext'

export default function Note(props) {
  // const date = mdx.frontmatter.date
  // const title = mdx.frontmatter.title
  // const topics = mdx.frontmatter.topics
  // const growthStage = mdx.frontmatter.growthStage
  const theme = useTheme()
  console.log({ props })
  return 'hello'
  // return (
  //   <Layout site={site} frontmatter={mdx.frontmatter}>
  //     <SEO frontmatter={mdx.frontmatter} isNotePost />
  //     <Container
  //       css={css`
  //         margin: 0 auto;
  //         max-width: 900px;
  //         margin-top: 3em;
  //         ${bpMaxSM} {
  //           margin-top: 0.8em;
  //         }
  //       `}
  //     >
  //       <h1
  //         css={css`
  //           text-align: center;
  //           margin-bottom: 0.6em;
  //         `}
  //       >
  //         {title}
  //       </h1>
  //       <div
  //         css={css`
  //           display: flex;
  //           justify-content: center;
  //           h6 {
  //             text-align: center;
  //             font-family: ${fonts.regularSans}, sans-serif;
  //             font-weight: normal;
  //             padding-bottom: 12px;
  //             border-bottom: 1px solid ${theme.colors.lightGrey};
  //             margin-bottom: 0.8em;
  //           }
  //         `}
  //       >
  //         {date && <h6>Last tended on {date}</h6>}
  //       </div>
  //       {/* <div
  //         css={css`
  //           display: flex;
  //           justify-content: center;
  //           h6 {
  //             text-align: center;
  //             opacity: 0.8;
  //             font-family: ${fonts.regularSans}, sans-serif;
  //             font-weight: normal;
  //             letter-spacing: 0.05em;
  //           }
  //         `}
  //       >
  //         {growthStage && <h6>{growthStage}</h6>}
  //       </div>
  //       <br /> */}
  //       <MDXRenderer>{mdx.body}</MDXRenderer>
  //       {/* Next and Previous */}
  //       <PreviousNext
  //         prevSlug={prevPage && prevPage.fields.slug}
  //         prevTitle={prevPage && prevPage.fields.title}
  //         nextSlug={nextPage && nextPage.fields.slug}
  //         nextTitle={nextPage && nextPage.fields.title}
  //       />
  //       {/* <BacklinksSection>
  //         <BacklinkItem
  //           pageTitle="Title"
  //           pageLink="Link"
  //           excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
  //         />
  //         <BacklinkItem
  //           pageTitle="Title"
  //           pageLink="Link"
  //           excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
  //         />
  //         <BacklinkItem
  //           pageTitle="Title"
  //           pageLink="Link"
  //           excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
  //         />
  //         <BacklinkItem
  //           pageTitle="Title"
  //           pageLink="Link"
  //           excerpt="For those of us here for the hyper-customised, over-engineered Javascript solution the Gatsby.js community has a number of active gardening enthusiasts building themes and plugins."
  //         />
  //       </BacklinksSection> */}
  //       {/* Share Container */}
  //       <Share
  //         url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
  //         title={title}
  //         twitterHandle={config.twitterHandle}
  //       />
  //     </Container>
  //     {/* <SubscribeForm /> */}
  //   </Layout>
  // )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     site {
//       ...site
//     }
// mdx(fields: { id: { eq: $id } }) {
//   frontmatter {
//     title
//     date(formatString: "MMMM DD, YYYY")
//     slug
//     topics
//   }
//   body
// }
// }
// `
