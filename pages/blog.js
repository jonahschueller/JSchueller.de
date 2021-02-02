import Link from 'next/link'
import styles from '../styles/Blog.module.css';
import commonStyles from '../styles/Content.module.css';
import Page from '../common/Page'
import { loadCategories, loadPostsForCategory } from '../lib/post';


const Blog = (props) => {

    const sections = props.categories.map(category => {
        return (
            <Section 
                category={category.category}
                posts={category.posts}>
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

            {
                sections
            }
        </div>
    </Page>)
}

const Section = ({ category, posts }) => {

    const postList = posts.map(post => {
        <div>
            {post}
        </div>
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

export const getStaticProps = async () => {
    let cate = loadCategories()
    .map(category => {
        let posts = loadPostsForCategory(category)
        console.log(category);
        console.log(posts);

        return {
            category: category,
            posts: posts
        }
    })

    return {
        props: {
            categories: cate
        }
    }
}

export default Blog;