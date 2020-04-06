const withSass = require('@zeit/next-sass')
module.exports = withSass({
    // targets: 'serverless',
    pageExtensions: ['mdx', 'jsx', 'js'],
    cssModules: true,
    env: {
        customKey: 'value',
    },
})