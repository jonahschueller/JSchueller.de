import Link from 'next/link'
import styles from '../styles/Blog.module.css';
import commonStyles from '../styles/Content.module.css';
import Page from '../common/Page'
import { loadBlogData } from '../lib/post';
import PostSection from '../common/post-section';


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

    return (
        <div>
            <Link href={`/blog#${category}`}>
                <div className={commonStyles.subtitle}>
                    { category }
                </div>
            </Link>

            <PostSection posts={posts} />
        </div>
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