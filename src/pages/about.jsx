import classes from "src/styles/Home.module.css"
import { useCallback, useState } from 'react';
import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Footer } from "src/components/Footer"

const ITEMS = [
  { 
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  { 
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  { 
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  { 
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  }, 
]

export default function About(props) {
  const { isShow, doubleCount, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });

  }, []);
  
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={classes.all}>
        <Main page="about" items={items} />
        <div className={classes.practice}>

          <button onClick={handleClick}>カウント</button>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
          {isShow ? <h2>{doubleCount}</h2> : null}

          <input type="text" value={text} onChange={ handleChange } />
          <button onClick={handleAdd}>追加</button>
          <ul>
            {array.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>

          <button onClick={handleReduce}>減らす</button>
          

        </div>
        <Footer items={items}/>
      </div>
    </>
  )
}
