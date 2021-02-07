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
        <div className={styles.container}>
            <div className={styles.construction}>
                Work in progess! 👷🏻‍♂️
            </div>
            <div className={styles.title}>
                Blog 👨🏻‍💻
            </div>
            <p className={styles.description}>
                Some of the latest stuff I am working on!
            </p>

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
            <div className={styles.postList}>
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
            <div className={styles.post}>
                <div className={styles.postTitle}>
                    { post.title }
                </div>
                <div className={styles.description}>
                    { post.description ?? '' }
                </div>
                <div className={styles.postMeta}>
                    { post.timestamp } &#x2022; { post.author }
                </div>
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