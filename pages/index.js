import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.meContainer}>
          <div className={styles.meColumn}>
            <h1>Jonah Schüller</h1>
            <h4 className={styles.subtitle}>SOFTWARE DEVELOPER</h4>
            <p className={styles.meText}>
              Hey there, my name is Jonah Schüller. Currently, I am studying
              computer science at RWTH Aachen University. 🤓 I love to explore the world of ☁️ cloud computing.
            </p>
          </div>
          <div className="meColumn right">
            <img src="/me.png" className={styles.avatar}/>
          </div>

        </div>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
