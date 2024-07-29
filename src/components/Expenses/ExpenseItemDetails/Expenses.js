import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

export default Expenses;
function Expenses({ items }) {
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
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
