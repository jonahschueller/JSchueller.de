import { readdirSync, existsSync, readFileSync, read } from "fs";
import { extname, join, resolve } from 'path'

const relativePath = (path) => {
    return join(process.cwd(), path)
}

const postData = (category, post) => {
    const data = loadBlogData()

    const section = data.filter(item => item.category.toLowerCase() === category)[0]

    console.log(section);

    if (section !== null) {
        const p = section.posts.filter(item => {
            return item.url === `${category}/${post}`
        })

        return p[0]
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

export const loadPost = (category, post) => {
    const source = postData(category, post)
    let postPath = relativePath(source)

    if (!existsSync(postPath)) {
        return null
    }

    return readFileSync(postPath)
}

export const loadCategories = () => {
    let source = relativePath('/_posts')
    // let source = '/'

    console.log(source);

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