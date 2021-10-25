import classes from "./count.module.css";
import {ControlledInput} from "./ControlledInput";
import {ChangeEvent} from "react";

type PropsType = {
  title: string
  value: number
  onChangeValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Tuner = (props: PropsType) => {



  return (
    <div className={classes.tuner}>
      <div>
        <span>{props.title}</span>
        <ControlledInput value={props.value}
                         onChangeValueHandler={props.onChangeValueHandler}/>
      </div>
    </div>
  )
}
