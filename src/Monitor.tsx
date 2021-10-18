import classes from "./count.module.css";

type PropsType = {
  currentValue: number
  maxValue: number
}

export const Monitor = (props: PropsType) => {
  const validClassName = (props.currentValue === props.maxValue)
    ? classes.monitorRed
    : classes.monitor;

  return (
    <div className={validClassName}>
      {props.currentValue}
    </div>
  )
}
