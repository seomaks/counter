type DisplayValueType = ReturnType<typeof DisplayValueAC>
type IncrementValueAType = ReturnType<typeof IncrementValueAC>
type DisableButtonAType = ReturnType<typeof DisableButtonAC>
type SetValueAType = ReturnType<typeof SetValueAC>
type MinValueChangeAType = ReturnType<typeof MinValueChangeAC>
type MaxValueChangeAType = ReturnType<typeof MaxValueChangeAC>

type ActionsType =
  | DisplayValueType
  | IncrementValueAType
  | DisableButtonAType
  | SetValueAType
  | MinValueChangeAType
  | MaxValueChangeAType

export type initialStateType = typeof initialState

export let initialState = {
  minValue: 1,
  maxValue: 10,
  displayValue: 0,
  disableSetButton: true
}

export const CounterReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {

    case 'DISPLAY_VALUE':
      return {...state, displayValue: action.displayValue};

    case 'INCREMENT_VALUE':
      return {...state, displayValue: action.displayValue + 1};

    case 'DISABLE_BUTTON':
      return {...state, disableSetButton: action.disableSetButton};

    case 'SET_VALUE':
      return {
        ...state, minValue: action.minValue,
        displayValue: action.minValue,
        disableSetButton: action.disableSetButton
      };

    case 'MIN_VALUE_CHANGE':
      return {
        ...state, minValue: action.targetValue,
        displayValue: 0,
        disableSetButton: false
      };
    case 'MAX_VALUE_CHANGE':
      return {
        ...state, maxValue: action.targetValue,
        displayValue: 0,
        disableSetButton: false
      };

    default:
      return state
  }
}

export const DisplayValueAC = (displayValue: number) => {
  return {type: 'DISPLAY_VALUE', displayValue} as const
}

export const IncrementValueAC = (displayValue: number) => {
  return {type: 'INCREMENT_VALUE', displayValue} as const
}

export const DisableButtonAC = (disableSetButton: boolean) => {
  return {type: 'DISABLE_BUTTON', disableSetButton} as const
}

export const SetValueAC = (minValue: number, displayValue: number, disableSetButton: boolean) => {
  return {type: 'SET_VALUE', minValue, displayValue, disableSetButton} as const
}

export const MinValueChangeAC = (minValue: number, displayValue: number, disableSetButton: boolean, targetValue: number) => {
  return {
    type: 'MIN_VALUE_CHANGE', minValue, displayValue, disableSetButton, targetValue} as const
}

export const MaxValueChangeAC = (maxValue: number, displayValue: number, disableSetButton: boolean, targetValue: number) => {
  return {
    type: 'MAX_VALUE_CHANGE', maxValue, displayValue, disableSetButton, targetValue} as const
}

export default CounterReducer