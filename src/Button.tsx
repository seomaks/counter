import classes from "./count.module.css";

type PropsType = {
  title: string
  onButtonClick: () => void
  isDisabled?: boolean
}

export const Button = (props: PropsType) => (
  <button
    className={classes.button}
    onClick={props.onButtonClick}
    disabled={props.isDisabled}
  >
    {props.title}
  </button>
)
