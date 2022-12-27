import Head from 'next/head'
import { useCallback } from 'react';
import { Main } from 'src/components/Main'

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <a 
        href="/about"
        onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
    </>
  )
}
