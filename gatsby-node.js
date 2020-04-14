const path = require('path')
const _ = require('lodash')

//Defining the createPosts function. It takes two callback functions – createPage() and createRedirect() – and an array of edges

// const createPosts = (createPage, createRedirect, edges) => {
// if (edges.node.fields.redirects) {
//   node.fields.redirects.forEach(fromPath => {
//     createRedirect({
//       fromPath,
//       toPath: pagePath,
//       redirectInBrowser: true,
//       isPermanent: true,
//     })
//   })
// }

//   if (edges.node.fields.categories === 'notes') {
//     edges.forEach(({ node }, i) => {
//       const pagePath = node.fields.slug
//       const prevPage = i === 0 ? null : edges[i - 1].node
//       const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
//       createPage({
//         path: pagePath,
//         component: path.resolve('./src/templates/noteTemplate.js'),
//         context: {
//           id: node.id,
//           prevPage,
//           nextPage,
//         },
//       })
//     })
//   }

//   if (edges.node.fields.categories === 'illustration') {
//     edges.forEach(({ node }, i) => {
//       const pagePath = node.fields.slug
//       const prevPage = i === 0 ? null : edges[i - 1].node
//       const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
//       createPage({
//         path: pagePath,
//         component: path.resolve('./src/templates/illustrationTemplate.js'),
//         context: {
//           id: node.id,
//           prevPage,
//           nextPage,
//         },
//       })
//     })
//   }

//   if (edges.node.fields.categories === 'book') {
//     edges.forEach(({ node }, i) => {
//       const pagePath = node.fields.slug
//       const prevPage = i === 0 ? null : edges[i - 1].node
//       const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
//       createPage({
//         path: pagePath,
//         component: path.resolve('./src/templates/bookTemplate.js'),
//         context: {
//           id: node.id,
//           prevPage,
//           nextPage,
//         },
//       })
//     })
//   }
// }

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions

  // const notesTemplate = path.resolve('./src/templates/noteTemplate.js')
  // const bookTemplate = path.resolve('./src/templates/bookTemplate.js')
  // const illustrationTemplate = path.resolve(
  //   './src/templates/illustrationTemplate.js',
  // )

  return graphql(`
    query {
      notesQuery: allMdx(
        filter: {
          frontmatter: { categories: { eq: "notes" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___date }
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
              date
            }
          }
        }
      }

      illustrationQuery: allMdx(
        filter: {
          frontmatter: {
            categories: { eq: "illustration" }
            published: { ne: false }
          }
        }
        sort: { order: DESC, fields: frontmatter___date }
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
              date
            }
          }
        }
      }

      bookQuery: allMdx(
        filter: {
          frontmatter: { categories: { eq: "book" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___date }
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
              date
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }
    if (_.isEmpty(data.notesQuery)) {
      return Promise.reject('There are no posts!')
    }

    data.notesQuery.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/noteTemplate.js'),
        context: {
          id: node.id,
          // prevPage,
          // nextPage,
        },
      })
    })

    data.illustrationQuery.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/illustrationTemplate.js'),
        context: {
          id: node.id,
          // prevPage,
          // nextPage,
        },
      })
    })

    data.bookQuery.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/bookTemplate.js'),
        context: {
          id: node.id,
          // prevPage,
          // nextPage,
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

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    const titleSlugged = _.join(_.drop(parent.name.split('-'), 3), '-')

    const slug =
      parent.sourceInstanceName === 'legacy'
        ? `notes/${node.frontmatter.date
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
      name: 'date',
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    })

    createNodeField({
      name: 'banner',
      node,
      value: node.frontmatter.banner,
    })

    createNodeField({
      name: 'categories',
      node,
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      name: 'keywords',
      node,
      value: node.frontmatter.keywords || [],
    })

    createNodeField({
      name: 'redirects',
      node,
      value: node.frontmatter.redirects,
    })

    createNodeField({
      name: 'isPost',
      node,
      value: true,
    })
  }
}
