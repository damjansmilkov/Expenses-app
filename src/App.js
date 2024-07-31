import { useState } from "react";
import Expenses from "./components/Expenses/ExpenseItemDetails/Expenses";
import UserInput from "./components/UserInput/UserInput/UserInput";



export const hardcoded = [
  {
    id: [''],
    title: [''],
    price: [''],
    date: new Date("" ),
  },
  
];

function App() {
  const [expenses, setExpenses] = useState(hardcoded);

  function addExpenseHandler(expenseData) {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <UserInput onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
