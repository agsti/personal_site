/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Replace react-lottie with a dummy component during SSR
exports.onReplaceRenderer = ({ replaceBodyHTMLString }) => {
  // This will prevent the lottie library from being executed during SSR
}

// You can also use this approach
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-lottie/,
            use: loaders.null(),
          },
          {
            test: /lottie-web/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
