import styles from '../styles/Navigation.module.css';

const NavigationBar = () => {

    return (
        <nav>
        <div className={styles.navigation}>
            <ul className={styles.navList}>
                <li>
                    Home
                </li>
                <li>
                    Blog
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