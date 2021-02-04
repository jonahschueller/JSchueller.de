import { useRouter } from 'next/router'
import Page from '../../../common/Page'
import { loadBlogData, loadPost } from '../../../lib/post'

const Post = (props) => {
    const router = useRouter()

    const { category, post } = router.query

    return (
        <Page>
            <h1>{JSON.stringify(props)}</h1>
        </Page>
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

    console.log(paths);
    
    // No fallback ->> 404
    return { paths, fallback: false }
}

export const getStaticProps = async ({ category, post }) => {

    const content = loadPost(category, post)

    return {
        props: {
            content: content
        }
    }
}


export default Post