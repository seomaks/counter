import {ChangeEvent} from "react";

type InputType = {
  value: number
  onChangeValueHandler: (e: ChangeEvent<HTMLInputElement>) => void

}

export const ControlledInput = (props:InputType) => {

  return (
    <input value={props.value} type={"number"} onChange={props.onChangeValueHandler} />
  )
}


