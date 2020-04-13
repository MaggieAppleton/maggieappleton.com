const path = require('path')
const _ = require('lodash')

//Defining the createPosts function. It takes two callback functions – createPage() and createRedirect() – and an array of edges

const createPosts = (createPage, createRedirect, edges, templateType) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      node.fields.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    const previousPagePath = prev ? prev.fields.slug : null
    const nextPagePath = next ? next.fields.slug : null

    createPage({
      path: pagePath,
      component: path.resolve(templateType),
      context: {
        id: node.id,
        previousPagePath,
        nextPagePath,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query allPostsQuery {
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

      booksQuery: allMdx(
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

    const noteTemplate = './src/templates/noteTemplate.js'
    const bookTemplate = './src/templates/bookTemplate.js'
    const illustrationTemplate = './src/templates/illustrationTemplate.js'

    const { edges } = data.notesQuery
    const { createRedirect, createPage } = actions
    createPosts(createPage, createRedirect, edges, noteTemplate)
    createPosts(createPage, createRedirect, edges, bookTemplate)
    createPosts(createPage, createRedirect, edges, illustrationTemplate)
  })

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
