import classes from 'src/components/Main/Main.module.css'
import { Header } from "src/components/Header"
import { Center } from "src/components/Center"
import { Footer } from 'src/components/Footer'

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
