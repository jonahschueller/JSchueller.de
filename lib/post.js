import { readdirSync, existsSync, readFileSync, read } from "fs";
import { extname, join, resolve } from 'path'

const relativePath = (path) => {
    return join(process.cwd(), path)
}

const postData = (category, post) => {
    const data = loadBlogData()

    const section = data.find(item => item.category.toLowerCase() === category)

    if (section !== null) {
        const p = section.posts.find(item => {
            return item.url === `${category}/${post}`
        })

        return p
    }

    return null
}

export const loadBlogData = () => {
    const path = relativePath('/_posts/blog.json')

    if (!existsSync(path)) {
        return null
    }

    const content = readFileSync(path)

    return JSON.parse(content).blog
}

const readFile = (file) => {
    if (file === null) {
        return null
    }

    let fullPath = relativePath(file)

    if (!existsSync(fullPath)) {
        return null
    }

    return readFileSync(fullPath, 'utf8')
}

export const loadPost = (category, post) => {
    const data = postData(category, post)
    let postPath = relativePath(`/_posts/${data.source}`)

    let content = readFile(`/_posts/${data.source}`)
    let leftSide = readFile(`/_posts/${data.leftSide}`)
    let rightSide = readFile(`/_posts/${data.rightSide}`)

    return {
        content: content,
        leftSideContent: leftSide,
        rightSideContent: rightSide,
        ...data
    }
}

export const loadCategories = () => {
    let source = relativePath('/_posts')

    if (!existsSync(source)) {
        return null
    }

    return readdirSync(source, {withFileTypes: true})
    .filter(item => item.isDirectory())
    .map(dir => dir.name)
}

export const loadPostsForCategory = (category) => {
    let source = relativePath(`/_posts/${category}`)

    if (!existsSync(source)) {
        return null
    }

    return readdirSync(source)
    // Filter for markdown files
    .filter(item => extname(item).toLowerCase() === '.md')
}