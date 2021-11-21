import {ChangeEvent} from "react";
import {Monitor} from "./Monitor";
import {Button} from "./Button";
import {Tuner} from "./Tuner"
import classes from "./count.module.css";
import {
  DisplayValueAC,
  IncrementValueAC, initialStateType, MaxValueChangeAC,
  MinValueChangeAC, SetValueAC
} from "./store/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";


function App() {
  const defaultData = useSelector<AppStateType, initialStateType>(state => state.counter)
  const dispatch = useDispatch()

 /* useEffect(()=> {
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
  }, [displayValue])*/

  //new UseEffect

  /*  useEffect(()=> {
    let data = localStorage.getItem('data')
    if (data) {
      setDefaultData(JSON.parse(data))
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])*/


  const handleResetValueClick = () =>
    dispatch(DisplayValueAC(defaultData.minValue))

  const handleSetDisplayValueClick = (): void => {
    dispatch(SetValueAC(defaultData.minValue, defaultData.displayValue, defaultData.disableSetButton))}

  const handlePlusDisplayValueClick = () => dispatch(IncrementValueAC(defaultData.displayValue))

  const handleMinValueChange = (e: ChangeEvent<HTMLInputElement>): void => {let targetValue = +e.currentTarget.value
    dispatch(MinValueChangeAC(defaultData.minValue, defaultData.displayValue, defaultData.disableSetButton, targetValue))}

  const handleMaxValueChange = (e: ChangeEvent<HTMLInputElement>): void => {let targetValue = +e.currentTarget.value
    dispatch(MaxValueChangeAC(defaultData.maxValue, defaultData.displayValue, defaultData.disableSetButton, targetValue))}

  const isDisabledResetButton = defaultData.displayValue === defaultData.minValue
  const isDisabledIncrementButton = defaultData.displayValue === defaultData.maxValue
  const inputMinValueClassName = (defaultData.minValue < 0) ? classes.tunerRed : ""
  const inputMaxValueClassName = (defaultData.maxValue <= defaultData.minValue) ? classes.tunerRed : ""

  return (
    <div className={classes.main}>
      <div className={classes.boarder}>
        <div className={inputMinValueClassName}>
          <Tuner
            title="Min Value"
            value={defaultData.minValue}
            onInputValueChange={handleMinValueChange}
          />
        </div>
        <div className={inputMaxValueClassName}>
          <Tuner
            title="Max Value"
            value={defaultData.maxValue}
            onInputValueChange={handleMaxValueChange}
          />
        </div>
        <div className={classes.buttons}>
          <Button
            title="Set"
            onButtonClick={handleSetDisplayValueClick}
            isDisabled={defaultData.disableSetButton}
          />
        </div>
      </div>
      <div className={classes.boarder}>
        <Monitor
          displayValue={defaultData.displayValue}
          minValue={defaultData.minValue}
          maxValue={defaultData.maxValue}
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