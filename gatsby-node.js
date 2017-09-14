const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

/* Running with Inferno:
exports.modifyWebpackConfig = function(config, stage) {
  if (stage !== `develop-html`) {
    config._config.resolve.alias = {
      react: `inferno-compat`,
      "react-dom": `inferno-compat`
    };
  }
  return config;
};
*/

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `posts`});
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.slug || slug
    });
  }
};

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(JSON.stringify(result, null, 4));
      result.data.allMarkdownRemark.edges.map(({node}) => {
        return createPage({
          path: `/${node.fields.slug}`,
          component: path.resolve(`./src/templates/post.tsx`),
            // THIS IS HOW YOU SELECT THE LAYOUT!
            // layout: `alternative`,
          context: {
              // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });
};
