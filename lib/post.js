import { readdirSync, existsSync, readFileSync } from "fs";
import { extname } from 'path'


export const loadPost = (name) => {
    if (!existsSync(name)) {
        return null
    }

    return readFileSync(name)
}

export const loadCategories = () => {
    let source = '../_posts'

    if (!existsSync(source)) {
        return null
    }

    return readdirSync(source)
    .filter(item => item.isDirectory())
    .map(dir = dir.name)
}

export const loadPostsForCategory = (category) => {
    let source = `../_posts/${category}`

    if (!existsSync(source)) {
        return null
    }

    return readdirSync(source)
    // Filter for markdown files
    .filter(item => extname(item).toLowerCase() === '.md')
    .map(item => item.name)
}