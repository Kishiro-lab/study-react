import classes from "src/styles/Home.module.css"
import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Footer } from 'src/components/Footer'

export default function Home({ count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd }) {

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className={classes.all}>
        <Main page="index" />
        <div className={classes.practice}>

          {isShow ? <h1>{count}</h1> : null}
          <button onClick={handleClick}>ボタン</button>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

          <input type="text" value={text} onChange={ handleChange } />
          <button onClick={handleAdd}>追加</button>
          <ul>
            {array.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>

        </div>
        <Footer />
      </div>
    </>
  )
}
