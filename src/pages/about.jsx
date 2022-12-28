import classes from "src/styles/Home.module.css"
import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Footer } from "src/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={classes.all}>
        <Main page="about" />
        <Footer />
      </div>
    </>
  )
}
