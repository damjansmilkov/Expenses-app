import "./Expenses.css";
import Card from "../../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useEffect, useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart";

function Expenses(properties) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterYearHandler = (year) => {
    setSelectedYear(year);
  };
  useEffect(() => {
    console.log(selectedYear);
  }, [selectedYear]);

  const filteredExpenses = properties.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
          onYearFilter={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
export default Expenses;
