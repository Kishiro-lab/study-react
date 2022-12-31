import classes from 'src/components/Center/Center.module.css'

export const Center = (props) => {
  return (
        <div className={classes.center}>
          <h1> {props.page} page </h1>
        </div>
  )
}