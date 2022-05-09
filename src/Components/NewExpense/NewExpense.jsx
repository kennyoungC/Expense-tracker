import { useState } from "react/cjs/react.development"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
const NewExpense = (props) => {
  const [isShowing, setIsShowing] = useState(false)
  const getInputsFromExpenseForm = (newExpense) => {
    const newExpenses = {
      ...newExpense,
      id: Math.random().toString(),
    }
    props.onGetInputValue(newExpenses)
    setIsShowingToFalse()
  }
  const setIsShowingToTrue = () => {
    setIsShowing(true)
  }
  const setIsShowingToFalse = () => {
    setIsShowing(false)
  }
  return (
    <div className="new-expense">
      {!isShowing && (
        <button onClick={setIsShowingToTrue}>Add New Expense</button>
      )}
      {isShowing && (
        <ExpenseForm
          onGetInputs={getInputsFromExpenseForm}
          onCancel={setIsShowingToFalse}
        />
      )}
    </div>
  )
}

export default NewExpense
