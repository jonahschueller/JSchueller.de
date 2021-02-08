import styles from '../styles/Blog.module.css';
import Link from 'next/link'

const PostSection = ({ posts }) => {
    
    const postList = posts.map(post => {
        return (
        <Post
            post={post}>
        </Post>)
    })

    return (
        <div className={styles.postList}>
            { postList }
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

export default PostSection