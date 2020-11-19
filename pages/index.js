import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome API</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-894PDP3V46"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-894PDP3V46');
              `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is an <a href="#">Awesome API</a>
        </h1>

        <p className={styles.description}>
          Here you can see some of the best end-points ever created (with random data to fill your apps).
        </p>

        <div className={styles.grid}>
          <div className={styles.card}> 
            <a href="/api/picsum"   className={styles.blue} id="picsum">
              <h3>Picsum &rarr;</h3>
            </a>
            <p>Get a random curated image from Unsplash, with its details.</p>
            <p className={styles.fonte}><strong>Source:</strong> <a href="https://picsum.photos/" className={styles.blue} target="_blank">Picsum</a></p>
            
          </div>

          <div className={styles.card}> 
            <a href="/api/art"  className={styles.red} id="picsum">
              <h3>Art &rarr;</h3>
            </a>
            <p>Get a random image from the MET Museum, with its details.</p>
            <p className={styles.fonte}><strong>Source:</strong> <a href="https://www.metmuseum.org/" className={styles.red} target="_blank">MET Museum</a></p>
          </div>

          <div className={styles.card}> 
            <a href="/api/rick-and-morty"  className={styles.green} id="picsum">
              <h3>Rick and Morty &rarr;</h3>
            </a>
            <p>Get a random character from Rick and Morty, with its details.</p>
            <p className={styles.fonte}><strong>Source:</strong> <a href="https://rickandmortyapi.com/" className={styles.green} target="_blank">Rick and Morty API</a></p>
          </div>

          <div className={styles.card}> 
            <a href="/api/final-space"  className={styles.purple} id="picsum">
              <h3>Final Space &rarr;</h3>
            </a>
            <p>Get a random character from Final Space, with its details.</p>
            <p className={styles.fonte}><strong>Source:</strong> <a href="https://finalspaceapi.com/" className={styles.purple} target="_blank">Final Space API</a></p>
          </div>

          <div className={styles.card}> 
            <a href="/api/cors?image=https://images.metmuseum.org/CRDImages/ep/original/DT2722.jpg"  className={styles.blue} id="picsum">
              <h3>Cors &rarr;</h3>
            </a>
            <p>Cors Anywhere for images</p>
          </div>

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
