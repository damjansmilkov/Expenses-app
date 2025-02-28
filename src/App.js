import React, { useState } from "react";
import Expenses from "./components/Expenses/ExpenseItemDetails/Expenses";
import UserInput from "./components/UserInput/UserInput/UserInput";

export const hardcoded = [
  {
    id: [""],
    title: [""],
    price: [""],
    date: new Date(""),
  },
];

function App() {
  const [expenses, setExpenses] = useState(hardcoded);

  // Функција за додавање трошоци
  function addExpenseHandler(expenseData) {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }

  // Функција за бришење трошоци
  function deleteExpenseHandler(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <div>
      <UserInput onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
