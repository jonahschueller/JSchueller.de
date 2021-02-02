import { readdirSync, existsSync, readFileSync } from "fs";
import { extname, join, resolve } from 'path'

const relativePath = (path) => {
    console.log(process.cwd());
    return join(process.cwd(), path)
}

export const loadPost = (name) => {
    let postPath = relativePath(`/_posts/${name}`)

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