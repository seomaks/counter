import {ChangeEvent} from "react";

type InputType = {
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ControlledInput = (props: InputType) => {
  return (
    <input
      type={"number"}
      value={props.value}
      onChange={props.onChange}
    />
  )
}


