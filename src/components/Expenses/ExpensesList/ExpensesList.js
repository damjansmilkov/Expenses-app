import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(properties) {
  if (properties.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        There are no expenses for the selected year.
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {properties.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
