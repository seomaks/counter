import {Monitor} from "./Monitor";
import classes from "./count.module.css";
import {Button} from "./Button";
import {ChangeEvent, useState} from "react";
import {Tuner} from "./Tuner"

const ONE = 1
const START_VALUE = 0

function App() {

  const [currentValue, setCurrentValue] = useState(START_VALUE)

  //стэйт для инпута
  const [editStartValue, setEditStartValue] = useState(currentValue)
  //взяли значение из инпута
  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setEditStartValue(e.currentTarget.valueAsNumber)
  //задали стартовое значение
  const startValue = editStartValue
  //кнопка
  const changeTunerValue = () => setCurrentValue(startValue || maxSetValue)


  const [maxTunerValue, setMaxTunerValue] = useState(10)
  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxTunerValue(e.currentTarget.valueAsNumber)
  const maxSetValue = maxTunerValue


  const isDisabled = currentValue === maxSetValue
  const isDropped = currentValue === startValue
  const isIncorrectSettings = startValue < 0 || maxSetValue <= startValue


  const changeValue = () => {
    if (currentValue < maxSetValue) {
      return setCurrentValue(currentValue + ONE)
    }
    setCurrentValue(maxSetValue)
  }

  const resetValue = () => setCurrentValue(startValue)


  return (
    <div className={classes.main}>
      <div className={classes.boarder}>
        <Tuner
          title="start value"
          value={startValue}
          onChangeValueHandler={onChangeValueHandler}
        />
        <Tuner
          title="max value"
          value={maxSetValue}
          onChangeValueHandler={onChangeMaxValueHandler}
        />
        <div className={classes.buttons}>
          <Button
            title="Set"
            changeCountValue={changeTunerValue}
            isDisabledButton={isIncorrectSettings}
          />

        </div>
      </div>
      <div className={classes.boarder}>
        <Monitor
          currentValue={currentValue}
          maxValue={maxSetValue}
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
