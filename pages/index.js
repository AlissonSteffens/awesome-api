import Head from 'next/head'
import styles from '../styles/Home.module.css'
import endpoints from '../data/endpoints'

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
          {endpoints.map(p => (
            <div className={styles.card}>
              {/* onMouseOver={(event)=>{event.target.style.color = p.color}} onMouseOut={(event)=>{event.target.style.color = "#000"}} */}
              <a href={p.endpoint} className={styles.link}  id={p.name}>
                <h3>{p.name} &rarr;</h3>
              </a>
              <p>{p.description}</p>
              {p.source?
                <p className={styles.fonte}><strong>Source:</strong> <a href={p.source.link} className={styles.link} target="_blank">{p.source.name}</a></p>
              :
                ""
              }

            </div>
          ))}
          {/* <div className={styles.card}> 
            <a href="/api/picsum"   className={styles.blue} id="picsum">
              <h3>Picsum &rarr;</h3>
            </a>
            <p>Get a random curated image from Unsplash, with its details.</p>
            <p className={styles.fonte}><strong>Source:</strong> <a href="https://picsum.photos/" className={styles.blue} target="_blank">Picsum</a></p>
            
          </div> */}


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
