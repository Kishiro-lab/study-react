import classes from './Main.module.css'
import { Header } from "../components/Header"
import { Center } from "../components/Center"
import { Footer } from "../components/Footer"

export function Main(props) {
  return (
      <main className={classes.main}>
        <Header>
          {<code className={classes.code}>pages/{props.page}.js</code>}
        </Header>
        <Center page={props.page}/>
        <Footer />
      </main>
  )
}
