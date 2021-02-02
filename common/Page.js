import commonStyles from '../styles/Content.module.css';
import Head from 'next/head'

const Page = ({children, title}) => {
    return (
    <div className={commonStyles.container}>
        <Head>
            <title>{title}</title>
        </Head>
        {children}
    </div>)
}

export default Page