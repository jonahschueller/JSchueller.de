import styles from '../styles/Navigation.module.css';
import Link from 'next/link'

const NavigationBar = () => {

    return (
        <nav>
        <div className={styles.navigation}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/">
                        <img src="/logo.png" className={styles.logo}/>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    Privacy
                </li>
            </ul>
        </div>
        </nav>
    )
}

export default NavigationBar