const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  return graphql(`
    query MyQuery {
      swapi {
        post {
          id
          link
          title
          updatedAt
          userId
          description
          createdAt
        }
      }
    }
  `).then(({ data }) => {
    data.swapi.post.map(post => {
      createPage({
        path: `/post/${post.id}`,
        component: path.resolve(`./src/components/postLayout.js`),
        context: {
          slug: `${post.id}`,
        },
      })
    })
  })
}
