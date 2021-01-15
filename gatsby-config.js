const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Illustration, Tech'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        Maggie Appleton is an illustrator & art director who explains technical topics through visual essays.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/notes`,
        name: 'Notes',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/essays`,
        name: 'Essays',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/books`,
        name: 'Books',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/antibooks`,
        name: 'AntiBooks',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/papers`,
        name: 'Papers',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/podcasts`,
    //     name: 'Podcasts',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/talks`,
    //     name: 'Talks',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/illustration`,
        name: 'Illustration',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-plugin-twitter`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle:
                'border-radius: 4px; max-width: 100%; margin-bottom: 0;',
              linkImagesToOriginal: false,
              quality: 100,
            },
          },
        ],
        plugins: [`gatsby-remark-images`, `gatsby-remark-embedder`],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  updated: edge.node.frontmatter.updated,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___updated] },
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 120)
                      frontmatter {
                        title
                        updated
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Maggieappleton.com',
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-45097160-1`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: `@aengusm/gatsby-theme-brain`,
      options: {
        mdxOtherwiseConfigured: true,
        notesDirectory: `content/notes/`,
        rootPath: `/`,
        hideDoubleBrackets: true,
      },
    },
  ],
}
