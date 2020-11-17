import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is an <a href="#">Awesome API</a>
        </h1>

        <p className={styles.description}>
          Here you can see some of the best end-points ever created.
        </p>

        <div className={styles.grid}>
          <a href="/api/picsum" className={styles.card}>
            <h3>Picsum &rarr;</h3>
            <p>Get a random curated image from Unsplash, with its details.</p>
          </a>

           <a href="/api/art" className={styles.card}>
            <h3>Art &rarr;</h3>
            <p>Get a random image from the MET Museum, with its details.</p>
          </a>
          <a href="/api/rick-and-morty" className={styles.card}>
            <h3>Rick and Morty &rarr;</h3>
            <p>Get a random character from <b>Rick and Morty</b>, with its details.</p>
          </a>
          <a href="/api/cors?image=https://images.metmuseum.org/CRDImages/ep/original/DT2722.jpg" className={styles.card} >
            <h3>Cors &rarr;</h3>
            <p>Cors Anywhere for images</p>
          </a>
          {/*
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        Coded with <strong className={styles.heart}>❤</strong> by 
        <a href="https://alissonsteffens.com/" target="blank" className={styles.alisson}>
          Alisson
        </a>
        and powered by
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
