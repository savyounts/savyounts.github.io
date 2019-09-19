const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/savyounts/web-portfolio',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
