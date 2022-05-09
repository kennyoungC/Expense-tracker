import Card from "../UI/Card"
import "../Expenses/Expenses.css"
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react/cjs/react.development"
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpenseChart"
const Expenses = (props) => {
  const [year, setYear] = useState("2021")
  const [counter, setCounter] = useState(1)
  const getYear = (year) => {
    setYear(year)
  }
  const updateCounter = () => {
    setCounter(counter + 1)
    // setCounter((prev) => {
    //   return prev + 1
    // })
  }
  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  )

  return (
    <>
      <button onClick={updateCounter}>+</button>
      <p>{counter}</p>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onGetYear={getYear} />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList filteredExpense={filteredExpense} />
      </Card>
    </>
  )
}

export default Expenses
