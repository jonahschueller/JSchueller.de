import { useRouter } from 'next/router'
import Page from '../../../common/Page'
import { render } from '../../../lib/markdown'
import { loadBlogData, loadPost } from '../../../lib/post'

const Post = ({ post }) => {
    // const router = useRouter()

    // const { category, post } = router.query

    const content = render(post.content)

    return (
        <Page
            title={post.title}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
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