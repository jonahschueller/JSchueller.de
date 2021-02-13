import commonStyles from '../../../styles/Content.module.css';
import { render } from '../../../lib/markdown'
import { loadBlogData, loadPost } from '../../../lib/post'
import styles  from '../../../styles/Post.module.css'
import Head from 'next/head'

const Post = ({ post }) => {
    const content = render(post.content)
    const leftSide = render(post.leftSideContent)
    const rightSide = render(post.rightSideContent)

    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div className={styles.container}>
                <div
                    className={styles.postContent} 
                    dangerouslySetInnerHTML={{__html: leftSide}}/>
                <div
                    className={styles.postContent} 
                    dangerouslySetInnerHTML={{__html: content}}/>
                <div
                    className={styles.postContent} 
                    dangerouslySetInnerHTML={{__html: rightSide}}/>
            </div>
        </div>
    )
}

export const getStaticPaths = async (props) => {
    const paths = loadBlogData() // Load blog data
    .map(item => {
        const category = item.category.toLowerCase()
        
        // Map post to route entry
        return item.posts.map(post => {
            const postId = post.title.replace(' ', '-').toLowerCase()
            return {
                params: {
                    category: category,
                    post: postId,
                    source: post.source,
                    title: post.title
                }
            }
        })
    }).reduce((prev, curr) => { // Reduce all categories together
        return prev.concat(curr)
    }, [])
    
    // Fallback ->> 404
    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {

    const post = loadPost(params.category, params.post)

    return {
        props: {
            post: post
        }
    }
}


export default Post