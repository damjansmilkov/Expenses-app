import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";


function Expenses (properties) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onYearFilter={filterYearHandler}
        />
        {properties.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.price}
            date={expense.date}
          />
          
        ))}
        

       
      </Card>
    </div>
  );
}
export default Expenses;