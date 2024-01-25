/** @type {import('next').NextConfig} */

const repo = 'givher'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig;

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// module.exports = {
//   // Other configurations...
//   output: 'export',
//   // Set basePath conditionally
//   basePath: isGithubActions ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` : '',

//   // Set assetPrefix conditionally
//   assetPrefix: isGithubActions ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}/` : '',
// };
