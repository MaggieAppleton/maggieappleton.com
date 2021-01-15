const path = require('path')
const _ = require('lodash')

// const REDIRECT_SLUGS = ['slugs', 'in', 'here']

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions

  // REDIRECT_SLUGS.forEach(slug => {
  //   createRedirect({
  //     fromPath: `/${slug}`,
  //     toPath: `https://maggieappleton.com/${slug}`,
  //     redirectInBrowser: true,
  //     isPermanent: true,
  //   })
  // })

  return graphql(`
    query {
      notesQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "note" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              updated
              growthStage
            }
          }
        }
      }

      essaysQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "essay" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              updated
            }
          }
        }
      }

      illustrationQuery: allMdx(
        filter: {
          frontmatter: {
            type: { eq: "illustration" }
            published: { ne: false }
          }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              updated
            }
          }
        }
      }

      bookQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "book" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              updated
            }
          }
        }
      }

      paperQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "paper" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              updated
            }
          }
        }
      }

    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const pageRedirects = node => {
      if (node.fields.redirects) {
        node.fields.redirects.forEach(fromPath => {
          createRedirect({
            fromPath,
            toPath: node.fields.slug,
            redirectInBrowser: true,
            isPermanent: true,
          })
        })
      }
    }

    data.essaysQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.essaysQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      pageRedirects(node)
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/essayTemplate.js'),
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.illustrationQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.illustrationQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node

      pageRedirects(node)
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/illustrationTemplate.js'),
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.bookQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.bookQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      pageRedirects(node)
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/bookTemplate.js'),
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.paperQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.paperQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      pageRedirects(node)
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/paperTemplate.js'),
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })


  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (
    node.internal.type === `Mdx` &&
    !_.get(node, 'frontmatter.type', []).includes('note')
  ) {
    const parent = getNode(node.parent)
    if (_.isUndefined(parent.name)) {
      return
    }
    const titleSlugged = _.join(_.drop(parent.name.split('-'), 3), '-')
    const slug =
      parent.sourceInstanceName === 'legacy'
        ? `notes/${node.frontmatter.updated
            .split('T')[0]
            .replace(/-/g, '/')}/${titleSlugged}`
        : node.frontmatter.slug || titleSlugged

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'published',
      node,
      value: node.frontmatter.published,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: 'subtitle',
      node,
      value: node.frontmatter.subtitle,
    })

    createNodeField({
      name: 'description',
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      name: 'url',
      node,
      value: node.frontmatter.url,
    })

    createNodeField({
      name: 'updated',
      node,
      value: node.frontmatter.updated ? node.frontmatter.updated.split(' ')[0] : '',
    })

    createNodeField({
      name: 'cover',
      node,
      value: node.frontmatter.cover,
    })

    createNodeField({
      name: 'type',
      node,
      value: node.frontmatter.type || [],
    })

    createNodeField({
      name: 'topics',
      node,
      value: node.frontmatter.topics || [],
    })

    createNodeField({
      name: 'redirects',
      node,
      value: node.frontmatter.redirects,
    })

    createNodeField({
      name: 'redirectTo',
      node,
      value: node.frontmatter.redirectTo,
    })

    createNodeField({
      name: 'isPost',
      node,
      value: true,
    })

    createNodeField({
      name: 'growthStage',
      node,
      value: node.frontmatter.growthStage,
    })
  }
}
