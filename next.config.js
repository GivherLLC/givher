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
console.log("----------------------------")

// let assetPrefix = ''
// let basePath = ''

if(isGithubActions){
  const isDeployPR = process.env.GITHUB_WORKFLOW || false;
  if(isDeployPR){
    const prRef = process.env.GITHUB_REF_NAME.split("/")[0];
    console.log(process.env.GITHUB_REF_NAME)
    console.log(process.env.GITHUB_REF_NAME.split("/"))
    console.log(`GITHUB REF: ${prRef}`)
    assetPrefix = `/pr-preview/pr-${prRef}`
    basePath = `/pr-preview/pr-${prRef}`
  }
}

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

