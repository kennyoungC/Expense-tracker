import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
const NewExpense = (props) => {
  const getInputsFromExpenseForm = (newExpense) => {
    const newExpenses = {
      ...newExpense,
      id: Math.random().toString(),
    }
    props.onGetInputValue(newExpenses)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onGetInputs={getInputsFromExpenseForm} />
    </div>
  )
}

export default NewExpense
