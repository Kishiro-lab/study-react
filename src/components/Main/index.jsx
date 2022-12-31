import classes from 'src/components/Main/Main.module.css'
import { Header } from "src/components/Header"
import { Center } from "src/components/Center"

export const Main = (props) => {
  return (
      <main className={classes.main}>
        <Header>
          {<code className={classes.code}>{props.items.length}</code>}
        </Header>
        <Center page={props.page}/> 
      </main>
  );
}
