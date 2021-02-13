var md = require('markdown-it')()

export const render = (content) => {
    if (content === null) {
        return ''
    }

    return md.render(content)
}