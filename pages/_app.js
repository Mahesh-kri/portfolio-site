import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Mahesh Krishna P — mahesh.dev</title>
        <meta name="description" content="Backend engineer building event-driven systems. Java, Spring Boot, Kafka." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
