import Head from 'next/head'
import { Main } from 'src/components/Main'

export default function Home() {

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Main page="index" />
    </>
  )
}
