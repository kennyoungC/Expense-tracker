import Card from "../UI/Card"
import ExpenseItem from "../Expenses/ExpenseItem"
import "../Expenses/Expenses.css"
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react/cjs/react.development"
const Expenses = (props) => {
  const [year, setYear] = useState("2020")
  const [counter, setCounter] = useState(1)
  const getYear = (year) => {
    console.log(year)
    setYear(year)
  }
  const updateCounter = () => {
    setCounter(counter + 1)
    // setCounter((prev) => {
    //   return prev + 1
    // })
  }
  return (
    <>
      <button onClick={updateCounter}>+</button>
      <p>{counter}</p>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onGetYear={getYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  )
}

export default Expenses
