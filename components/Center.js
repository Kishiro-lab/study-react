import styles from '../styles/Home.module.css'

export function Center(props) {
  return (
        <div className={styles.center}>
          <h1> {props.page} page </h1>
        </div>
  )
}