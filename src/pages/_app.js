import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            Home
          </Link>
          <Link href="/new">
            Add Pet
          </Link>
        </div>

        <img
          id="title"
          src="https://arizamoises.co/assets/logo.png"
          alt="pet care logo"
        ></img>
      </div>
      <h1>Adoption shelter</h1>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
