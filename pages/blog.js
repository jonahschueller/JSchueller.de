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
        <div>
            { post.title }
        </div>
    )
}

export const getStaticProps = async () => {
    let blogContent = loadBlogData()
    // .map(entry => {
    //     let posts = loadPostsForCategory(category)
    //     console.log(category);
    //     console.log(posts);

    //     return {
    //         category: category,
    //         posts: posts
    //     }
    // })

    return {
        props: {
            blog: blogContent
        }
    }
}

export default Blog;