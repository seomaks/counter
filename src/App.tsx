import {Monitor} from "./Monitor";
import classes from "./count.module.css";
import {Button} from "./Button";
import {useState} from "react";
import {Tuner} from "./Tuner"

const ONE = 1
const MAX_VALUE = 5
const RESET_VALUE = 0
const START_VALUE = 1

function App() {

  const [currentValue, setCurrentValue] = useState(START_VALUE)

  const isDisabled = currentValue === MAX_VALUE
  const isDropped = currentValue === RESET_VALUE

  const changeValue = () => {
    if (currentValue < MAX_VALUE) {
      return setCurrentValue(currentValue + ONE)
    }

    setCurrentValue(MAX_VALUE)
  }

  const resetValue = () => setCurrentValue(RESET_VALUE)

  return (
    <div className={classes.main}>
      <div className={classes.boarder}>
      <Tuner
      title="start value"
      />
      <Tuner
        title="set value"
      />
        <div className={classes.buttons}>
        <Button
          title="Set"
          changeCountValue={changeValue}
          isDisabledButton={isDisabled}
        />
        </div>
      </div>
      <div className={classes.boarder}>
      <Monitor
        currentValue={currentValue}
        maxValue={MAX_VALUE}
      />
        <div className={classes.buttons}>
      <Button
        title="inc"
        changeCountValue={changeValue}
        isDisabledButton={isDisabled}
      />
      <Button
        title="res"
        changeCountValue={resetValue}
        isDisabledButton={isDropped}
      />
        </div>
      </div>
    </div>
  )
}

export default App
