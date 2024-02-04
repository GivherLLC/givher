/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
console.log("----------------------------")
console.log(`isGithubActions: ${isGithubActions}`)
console.log("++++++++++++++++++++++++++++")
console.log("process.env.GITHUB_ACTIONS")
console.log(process.env.GITHUB_ACTIONS)
console.log("++++++++++++++++++++++++++++")
console.log("process.env")
console.log(process.env)
console.log("++++++++++++++++++++++++++++")
console.log(`isGithubActions: ${isGithubActions}`)
console.log("----------------------------")

module.exports = {
  output: 'export',
}

