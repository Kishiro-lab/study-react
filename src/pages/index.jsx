import Head from 'next/head'
import { useCallback, useEffect } from 'react';
import { Main } from 'src/components/Main'

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("mount");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("unmount");
      document.body.style.backgroundColor = "";
    };
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
