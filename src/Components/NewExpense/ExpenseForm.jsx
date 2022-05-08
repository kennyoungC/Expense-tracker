import { useState } from "react/cjs/react.development"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  })
  const expenseChangerHandler = (event) => {
    // setNewExpense({
    //   ...newExpense,
    //   title: event.target.value,
    // })
    setNewExpense((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onGetInputs(newExpense)
    setNewExpense({
      title: "",
      amount: 0,
      date: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpense.title}
            onChange={expenseChangerHandler}
            // onChange={(e) =>
            //   setNewExpense({
            //     ...newExpense,
            //     title: e.target.value,
            //   })
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newExpense.amount}
            onChange={(event) =>
              setNewExpense((prevState) => {
                return { ...prevState, amount: event.target.value }
              })
            }
            // onChange={(e) =>
            //   setNewExpense({
            //     ...newExpense,
            //     amount: e.target.value,
            //   })
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) =>
              setNewExpense({
                ...newExpense,
                date: new Date(e.target.value).toISOString(),
              })
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
