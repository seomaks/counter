import {ChangeEvent, useEffect, useState} from "react";
import {Monitor} from "./Monitor";
import {Button} from "./Button";
import {Tuner} from "./Tuner"
import classes from "./count.module.css";

function App() {
  const [minValue, setMinValue] = useState<number>(1);
  const [maxValue, setMaxValue] = useState<number>(10);
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [disableSetButton, setDisableSetButton] = useState(true);

  useEffect(()=> {
    let minValueAsString = localStorage.getItem('minValue')
    if (minValueAsString) {
      let newMinValue = JSON.parse(minValueAsString)
      setMinValue(newMinValue)
    }
  }, [])

  useEffect(()=> {
    let maxValueAsString = localStorage.getItem('maxValue')
    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString)
      setMaxValue(newMaxValue)
    }
  }, [])

  useEffect(()=> {
    let displayValueAsString = localStorage.getItem('displayValue')
    if (displayValueAsString) {
      let newDisplayValue = JSON.parse(displayValueAsString)
      setDisplayValue(newDisplayValue)
    }
  }, [])

  useEffect(()=> {
localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])

  useEffect(()=> {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  useEffect(()=> {
    localStorage.setItem('displayValue', JSON.stringify(displayValue))
  }, [displayValue])

  const isDisabledResetButton = displayValue === minValue
  const isDisabledIncrementButton = displayValue === maxValue

  const handleResetValueClick = (): void => setDisplayValue(minValue)

  const handleSetDisplayValueClick = (): void => {
    setDisplayValue(minValue)
    setDisableSetButton(true)
  }

  const handlePlusDisplayValueClick = (): void => setDisplayValue(prevState => +prevState + 1)

  const handleMinValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMinValue(+e.currentTarget.value)
    setDisableSetButton(false)
    setDisplayValue(0)
  }

  const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMaxValue(+e.currentTarget.value)
    setDisableSetButton(false)
    setDisplayValue(0)
  }

  const inputMinValueClassName = (minValue < 0) ? classes.tunerRed : ""
  const inputMaxValueClassName = (maxValue <= minValue) ? classes.tunerRed : ""

  return (
    <div className={classes.main}>
      <div className={classes.boarder}>
        <div className={inputMinValueClassName}>
          <Tuner
            title="Min Value"
            value={minValue}
            onInputValueChange={handleMinValueChange}
          />
        </div>
        <div className={inputMaxValueClassName}>
          <Tuner
            title="Max Value"
            value={maxValue}
            onInputValueChange={handleMaxValueChange}
          />
        </div>
        <div className={classes.buttons}>
          <Button
            title="Set"
            onButtonClick={handleSetDisplayValueClick}
            isDisabled={disableSetButton}
          />
        </div>
      </div>
      <div className={classes.boarder}>
        <Monitor
          displayValue={displayValue}
          minValue={minValue}
          maxValue={maxValue}
        />
        <div className={classes.buttons}>
          <Button
            title="Increment"
            onButtonClick={handlePlusDisplayValueClick}
            isDisabled={isDisabledIncrementButton}
          />
          <Button
            title="Reset"
            onButtonClick={handleResetValueClick}
            isDisabled={isDisabledResetButton}
          />
        </div>
      </div>
    </div>
  )
}

export default App
