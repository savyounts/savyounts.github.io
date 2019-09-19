const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/templates/blog-template.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/savyounts/Documents/code/github/web-portfolio/src/pages/projects.js")))
}

