const ghpages = require('gh-pages')
const gitRemoteOriginUrl = require('git-remote-origin-url')
const path = require('path')

const GH_TOKEN = process.env.GH_TOKEN
const GH_USER = process.env.GH_USER
const GH_EMAIL = process.env.GH_EMAIL

function publish (remoteUrl) {
  const repo = GH_TOKEN ? remoteUrl.replace(/(\/\/)/, `$1${GH_TOKEN}@`) : remoteUrl
  const user = GH_USER && GH_EMAIL ? { name: GH_USER, email: GH_EMAIL } : {}

  console.log('Starting deployment to GitHub pages')
  ghpages.publish(path.join(__dirname, 'dist'), Object.assign({}, {
    silent: true,
    repo: repo
  }, user), function (err) {
    if (err) {
      console.error(`Deployment error: ${err.message}`)
      return process.exit(1)
    }

    console.log('Deployment complete!')
    return process.exit(0)
  })
}

gitRemoteOriginUrl().then(publish)
