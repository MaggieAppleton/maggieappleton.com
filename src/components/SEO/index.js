import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SchemaOrg from './SchemaOrg'
import config from '../../../config/website'

const SEO = ({ postData, frontmatter = {}, postImage, isNotePost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {}
      const title = isNotePost ? postMeta.title : config.siteTitle
      const description = postMeta.description || seo.description
      const image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image
      const url = postMeta.slug
        ? `${seo.canonicalUrl}${path.sep}${postMeta.slug}`
        : seo.canonicalUrl
      const datePublished = isNotePost ? postMeta.datePublished : false

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isNotePost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.social.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isNotePost={isNotePost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            canonicalUrl={seo.canonicalUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      )
    }}
  />
)

SEO.propTypes = {
  isNotePost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isNotePost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
}

export default SEO
