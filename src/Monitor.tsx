import classes from "./count.module.css";

type PropsType = {
  displayValue: number
  minValue: number
  maxValue: number
}

export const Monitor = (props: PropsType) => {
  const validClassName = (props.displayValue === props.maxValue || props.maxValue <= props.minValue || props.minValue < 0)
    ? classes.monitorRed
    : classes.monitor;

  const getCorrectValue = () => {
    const isMinValueIsNotLessFromZero = props.minValue < 0
    const isMaxValueLessFromMinValue = props.maxValue < props.minValue
    const isDisplayValueNotEqualZero = props.displayValue !== 0
    const isMinValueEqualMaxValue = props.minValue === props.displayValue
    const isDisplayValueLessFromMaxValue = props.displayValue <= props.maxValue

    if (isMinValueIsNotLessFromZero || isMaxValueLessFromMinValue) {
      return 'Error'
    }

    if (
      (isMinValueEqualMaxValue && isDisplayValueNotEqualZero) ||
      isDisplayValueLessFromMaxValue && isDisplayValueNotEqualZero
    ) {
      return  props.displayValue
    }

    return 'Set Value'
  }

  return (
    <div className={validClassName}>

      <span>
        {
          getCorrectValue()
        }
      </span>
    </div>
  )
}
