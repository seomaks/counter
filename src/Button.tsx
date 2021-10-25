import classes from "./count.module.css";

type PropsType = {
  title: string
  changeCountValue: () => void
  isDisabledButton: boolean
}

export const Button = (props: PropsType) => (
  <button
    className={classes.button}
    onClick={props.changeCountValue}
    disabled={props.isDisabledButton}
  >{props.title}
  </button>
)
