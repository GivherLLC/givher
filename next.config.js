/** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let assetPrefix = ''
// let basePath = ''

// if(isGithubActions){
//   const isDeployPR = process.env.GITHUB_WORKFLOW === 'Deploy PR previews';
//   if(isDeployPR){
//     const prRef = process.env.GITHUB_REF_NAME.split("/")[0];
//     console.log(process.env.GITHUB_REF_NAME)
//     console.log(process.env.GITHUB_REF_NAME.split("/"))
//     console.log(`GITHUB REF: ${prRef}`)
//     assetPrefix = `/pr-preview/pr-${prRef}`
//     basePath = `/pr-preview/pr-${prRef}`
//   }
// }

module.exports = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // assetPrefix: assetPrefix,
  // basePath: basePath,
}

