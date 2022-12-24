import styles from '../styles/Home.module.css'
import { Header } from "../components/Header"
import { Center } from "../components/Center"
import { Footer } from "../components/Footer"

export function Main(props) {
  return (
      <main className={styles.main}>
        <Header onClick={() => alert("クリック！")}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Header>
        <Center page={props.page}/>
        <Footer />
      </main>
  )
}
