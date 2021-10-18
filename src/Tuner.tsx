import classes from "./count.module.css";

type PropsType = {
  title: string
}

export const Tuner = (props: PropsType) => {

  return (
    <div className={classes.tuner}>
      <div>
        <span>{props.title}</span>
        <input type="number" placeholder={'0'}
        />
      </div>
    </div>
  )
}
