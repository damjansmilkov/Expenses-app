import "./UserInput.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";
function UserInput(properties) {
  const [showForm, setShowForm] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    properties.onAddExpense(expenseData);
    setShowForm(false);
  }
  function showFormHandler() {
    setShowForm(true);
  }

  function hideFormHandler() {
    setShowForm(false);
  }

  return (
    <div className="user-input">
      <div className='expense-form__actions'>
        {!showForm && <button onClick={showFormHandler}>Show Form</button>}
      </div>
      {showForm && (
        <ExpenseForm
          showFormHandler={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
          showForm={showForm}
          Cancel={hideFormHandler}
        />
      )}
    </div>
  );
}

export default UserInput;
