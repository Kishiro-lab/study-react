import classes from "src/styles/Home.module.css"
import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Footer } from "src/components/Footer"

export default function About(props) {
  const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;
  
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={classes.all}>
        <Main page="about" />
        <div className={classes.practice}>

          <button onClick={handleClick}>カウント</button>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
          {isShow ? <h2>{count}</h2> : null}

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
