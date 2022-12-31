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

const About = (props) => {
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

          <button onClick={props.handleClick}>カウント</button>
          <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
          {props.isShow ? <h2>{props.doubleCount}</h2> : null}

          <input type="text" value={props.text} onChange={props.handleChange} />
          <button onClick={props.handleAdd}>追加</button>
          <ul>
            {props.array.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>

          <button onClick={handleReduce}>減らす</button>

        </div>
        <Footer items={items} />
      </div>
    </>
  )
}

export default About;