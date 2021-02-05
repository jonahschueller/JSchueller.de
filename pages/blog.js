import Link from 'next/link'
import styles from '../styles/Blog.module.css';
import commonStyles from '../styles/Content.module.css';
import Page from '../common/Page'
import { loadCategories, loadPostsForCategory, loadBlogData } from '../lib/post';


const Blog = (props) => {

    const sections = props.blog.map(entry => {
        return (
            <Section 
                category={entry.category}
                posts={entry.posts}>
            </Section>
        )
    })

    return (
    <Page title="Blog">
        <div>
            <Link href="/blog#blog">
                <div className={commonStyles.title}>
                    Blog
                </div>
            </Link>

            { sections }
        </div>
    </Page>)
}

const Section = ({ category, posts }) => {

    const postList = posts.map(post => {
        return (
        <Post
            post={post}>
        </Post>)
    })

    return (
        <div>
            <Link href={`/blog#${category}`}>
                <div className={commonStyles.subtitle}>
                    { category }
                </div>
            </Link>
            <div>
                { postList }
            </div>
        </div>
    )
}

const Post = ({ post }) => {
    return (
        <Link
            href="/blog/[category]/[post]"
            as={`/blog/${post.url}`}>
            <div className={commonStyles.link}>
                { post.title }
            </div>
        </Link>
    )
}

export const getStaticProps = async () => {
    let blogContent = loadBlogData()

    return {
        props: {
            blog: blogContent
        }
    }
}

export default Blog;