var md = require('markdown-it')()

export const render = (content) => {
    return md.render(content)
}