/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
console.log("----------------------------")
console.log(`isGithubActions: ${isGithubActions}`)
console.log("++++++++++++++++++++++++++++")
console.log(`isGithubActionDeployPR: ${process.env.GITHUB_WORKFLOW || false}`)
console.log("++++++++++++++++++++++++++++")
console.log("process.env.GITHUB_ACTIONS")
console.log(process.env.GITHUB_ACTIONS)
console.log("++++++++++++++++++++++++++++")
console.log("process.env")
console.log(process.env)
console.log("++++++++++++++++++++++++++++")
console.log(`isGithubActions: ${isGithubActions}`)
console.log("----------------------------")

let assetPrefix = ''
let basePath = ''

if(isGithubActions){
  const isDeployPR = process.env.GITHUB_WORKFLOW || false;
  if(isDeployPR){
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    assetPrefix = `/${repo}`
    basePath = `/${repo}`
  }
}

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

