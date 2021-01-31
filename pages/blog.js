import Link from 'next/link'
import styles from '../styles/Blog.module.css';
import commonStyles from '../styles/Content.module.css';
import Page from '../common/Page'

const Blog = () => {
    return (
    <Page title="Blog">
        <div>
            <Link href="/blog">
                <div className={commonStyles.title}>
                    &#x2192; Blog
                </div>
            </Link>

            <Link href="/blog#featured">
                <div className={commonStyles.subtitle}>
                    &#x2192; Featured
                </div>
            </Link>
        </div>
    </Page>)
}

export default Blog;