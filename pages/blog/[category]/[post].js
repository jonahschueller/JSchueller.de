import { useRouter } from 'next/router'
import Page from '../../../common/Page'

const Post = (props) => {
    const router = useRouter()

    const { category, post } = router.query

    return (
        <Page>
            <h1>{post}</h1>
        </Page>
    )
}

export default Post