import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(properties) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };
    properties.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
    properties.showFormHandler();
  }

  if (!properties.showForm) {
    return null;
  }
  const isFormvalid = enteredTitle && enteredPrice && enteredDate;

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div
          className="expense-form__controls"
        >
          <label style={{ color: "white" }}>Expense</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__controls">
          <label style={{ color: "white" }}>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="expense-form__controls">
          <label style={{ color: "white" }}>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="button" onClick={properties.Cancel}>
          Cancel
        </button>
        <button type="submit" disabled={!isFormvalid}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
