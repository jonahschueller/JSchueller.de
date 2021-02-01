import Link from 'next/link'
import styles from '../styles/Blog.module.css';
import commonStyles from '../styles/Content.module.css';
import Page from '../common/Page'
import { loadCategories } from '../lib/post';


const Blog = (props) => {
    console.log(props);

    return (
    <Page title="Blog">
        <div>
            <Link href="/blog#blog">
                <div className={commonStyles.title}>
                    &#x2192; Blog
                </div>
            </Link>

            <Link href="/blog#featured">
                <div className={commonStyles.subtitle}>
                    &#x2192; Featured
                </div>
            </Link>
            {/* {
                props.categories.map(item => {
                    return (<div>{item}</div>)
                })
            } */}
        </div>
    </Page>)
}

export const getStaticProps = async () => {
    let cate = loadCategories()

    return {
        props: {
            categories: cate
        }
    }
}

export default Blog;