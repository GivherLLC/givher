/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
console.log(isGithubActions)
console.log(process.env && process.env.GITHUB_REPOSITORY)
// console.log(process.env && process.env.GITHUB_REPOSITORY.replace(/.*?\//, ''))

// module.exports = {
  // Other configurations...
//   output: 'export',
//   basePath: '/givher',
  // Set basePath conditionally
//   basePath: isGithubActions ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` : '',

  // Set assetPrefix conditionally
//   assetPrefix: isGithubActions ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` : '',
// };


// const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`

  console.log(`repo: ${repo}`)
  console.log(`repo: ${assetPrefix}`)
  console.log(`repo: ${basePath}`)

}

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

