import Head from 'next/head'
import styles from '../styles/Blog.module.css';

const Blog = () => {
    return (
    <div className={styles.container}>
        <Head>
            <title>Blog</title>
        </Head>
        <div>
            <h1>Blog</h1>

            <h2>Featured</h2>
        </div>
    </div>)
}

export default Blog;