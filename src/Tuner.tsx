import {ChangeEvent} from "react";
import classes from "./count.module.css";
import {ControlledInput} from "./ControlledInput";

type PropsType = {
  title: string
  value: number
  onInputValueChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Tuner = (props: PropsType) => {
  return (
    <div className={classes.tuner}>
      <div>
        <span>{props.title}</span>
        <ControlledInput
          value={props.value}
          onChange={props.onInputValueChange}
        />
      </div>
    </div>
  )
}
