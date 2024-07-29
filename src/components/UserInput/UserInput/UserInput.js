import "./UserInput.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
function UserInput(properties) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    properties.onAddExpense(expenseData);
  }

  return (
    <div className="user-input">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default UserInput;
