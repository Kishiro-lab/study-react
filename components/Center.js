import classes from './Center.module.css'

export function Center(props) {
  return (
        <div className={classes.center}>
          <h1> {props.page} page </h1>
        </div>
  )
}